"use client";

import React, { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { presentationSlidesMeta } from "@/data/slidesMeta";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Wifi, 
  List, 
  Check, 
  Moon, 
  Sun,
  Vibrate,
  Smartphone,
  Sparkles,
  MousePointer,
  Crosshair,
  Sliders
} from "lucide-react";

type RemoteMode = "clicker" | "trackpad";

function RemoteController() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room") || "default";

  const [mode, setMode] = useState<RemoteMode>("clicker");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isBlackout, setIsBlackout] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [rtcConnected, setRtcConnected] = useState<boolean>(false);
  const [showSlideList, setShowSlideList] = useState<boolean>(false);
  const [hapticEnabled, setHapticEnabled] = useState<boolean>(true);
  const [sensitivity, setSensitivity] = useState<number>(1.5);

  // Presentation stopwatch timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Trackpad Touch State
  const padRef = useRef<HTMLDivElement>(null);
  const [touchFeedback, setTouchFeedback] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  // Host cursor position estimates (0% - 100%)
  const cursorPosRef = useRef<{ x: number; y: number }>({ x: 50, y: 50 });
  const touchStartPos = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const lastTouchPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // WebRTC Connection Ref
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rtcConnRef = useRef<any>(null);

  const totalSlides = presentationSlidesMeta.length;

  // Trigger haptic vibration feedback
  const triggerHaptic = useCallback((pattern: number | number[] = 30) => {
    if (hapticEnabled && typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {
        // Ignore if not supported
      }
    }
  }, [hapticEnabled]);

  // Send message over WebRTC DataChannel (instantaneous, 0-5ms latency)
  const sendRtcData = useCallback((data: Record<string, unknown>) => {
    if (rtcConnRef.current && rtcConnRef.current.open) {
      try {
        rtcConnRef.current.send(data);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }, []);

  // Send action to computer (via WebRTC first, fallback to ntfy pubsub)
  const sendAction = useCallback(async (action: string, payload: Record<string, unknown> = {}) => {
    triggerHaptic( action === "next" ? [35, 15, 35] : 25 );

    const sentViaRtc = sendRtcData({ action, ...payload });

    // Send via ntfy HTTP fallback as well
    if (!sentViaRtc || ["next", "prev", "jump", "blackout", "ping"].includes(action)) {
      try {
        await fetch(`https://ntfy.sh/rf-pres-${roomId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action,
            sender: "remote",
            timestamp: Date.now(),
            ...payload,
          }),
        });
      } catch (err) {
        console.error("Failed to send remote command:", err);
      }
    }
  }, [roomId, triggerHaptic, sendRtcData]);

  // Connect WebRTC DataChannel using PeerJS
  useEffect(() => {
    if (typeof window === "undefined" || !roomId) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let peer: any = null;

    import("peerjs").then(({ default: Peer }) => {
      try {
        peer = new Peer();
        
        peer.on("open", () => {
          const conn = peer.connect(`rf-host-${roomId}`, {
            reliable: true,
          });

          conn.on("open", () => {
            rtcConnRef.current = conn;
            setRtcConnected(true);
            setIsConnected(true);
            conn.send({ action: "ping" });
          });

          conn.on("data", (raw: unknown) => {
            try {
              const data = typeof raw === "string" ? JSON.parse(raw) : raw;
              if (data && typeof data === "object") {
                const payload = data as Record<string, unknown>;
                if (payload.action === "sync") {
                  if (typeof payload.currentSlide === "number") {
                    setCurrentSlide(payload.currentSlide);
                  }
                  if (typeof payload.isBlackout === "boolean") {
                    setIsBlackout(payload.isBlackout);
                  }
                }
              }
            } catch {
              // Ignore parse error
            }
          });

          conn.on("close", () => {
            rtcConnRef.current = null;
            setRtcConnected(false);
          });
        });

        peer.on("error", () => {
          // Fallback to ntfy will handle it
          setRtcConnected(false);
        });
      } catch (e) {
        console.warn("PeerJS init skipped:", e);
      }
    });

    return () => {
      if (rtcConnRef.current) rtcConnRef.current.close();
      if (peer) peer.destroy();
    };
  }, [roomId]);

  // Connect to SSE stream to receive computer feedback & sync (HTTP fallback)
  useEffect(() => {
    if (!roomId) return;

    sendAction("ping");

    const eventSource = new EventSource(`https://ntfy.sh/rf-pres-${roomId}/sse`);

    eventSource.onopen = () => {
      setIsConnected(true);
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data && data.message) {
          const payload = typeof data.message === "string" ? JSON.parse(data.message) : data.message;
          
          if (payload.action === "sync") {
            if (typeof payload.currentSlide === "number") {
              setCurrentSlide(payload.currentSlide);
            }
            if (typeof payload.isBlackout === "boolean") {
              setIsBlackout(payload.isBlackout);
            }
          }
        }
      } catch {
        // Non-JSON or standard ntfy ping
      }
    };

    eventSource.onerror = () => {
      setIsConnected(false);
    };

    return () => {
      eventSource.close();
    };
  }, [roomId, sendAction]);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    sendAction("next");
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    sendAction("prev");
  };

  const handleJump = (index: number) => {
    setCurrentSlide(index);
    sendAction("jump", { slide: index });
    setShowSlideList(false);
  };

  const handleToggleBlackout = () => {
    const nextState = !isBlackout;
    setIsBlackout(nextState);
    sendAction("blackout", { state: nextState });
  };

  // =========================================================================
  // MOUSEPAD / TRACKPAD TOUCH HANDLERS
  // =========================================================================
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    lastTouchPos.current = { x: touch.clientX, y: touch.clientY };

    if (padRef.current) {
      const rect = padRef.current.getBoundingClientRect();
      setTouchFeedback({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        active: true,
      });
    }

    // Inform computer cursor is active
    sendAction("cursor_active", { visible: true });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent page scroll during pad touch
    const touch = e.touches[0];

    const deltaX = (touch.clientX - lastTouchPos.current.x) * sensitivity;
    const deltaY = (touch.clientY - lastTouchPos.current.y) * sensitivity;

    lastTouchPos.current = { x: touch.clientX, y: touch.clientY };

    if (padRef.current) {
      const rect = padRef.current.getBoundingClientRect();
      
      // Update local thumb indicator
      setTouchFeedback({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        active: true,
      });

      // Calculate new computer cursor coordinates (0 - 100%)
      const sensitivityFactor = (sensitivity * 0.18);
      const newX = Math.max(2, Math.min(98, cursorPosRef.current.x + deltaX * sensitivityFactor));
      const newY = Math.max(2, Math.min(98, cursorPosRef.current.y + deltaY * sensitivityFactor));

      cursorPosRef.current = { x: newX, y: newY };

      // High-speed cursor transmission over WebRTC DataChannel (0ms delay)
      sendRtcData({
        action: "cursor",
        x: newX,
        y: newY,
      });
    }
  };

  const handleTouchEnd = () => {
    setTouchFeedback((prev) => ({ ...prev, active: false }));
    const touchDuration = Date.now() - touchStartPos.current.time;
    const distX = Math.abs(lastTouchPos.current.x - touchStartPos.current.x);
    const distY = Math.abs(lastTouchPos.current.y - touchStartPos.current.y);

    // If tap was quick (<250ms) and didn't drag (<15px), trigger Laser Spotlight Ping!
    if (touchDuration < 250 && distX < 15 && distY < 15) {
      triggerHaptic([40, 20, 60]);
      sendAction("laser_ping", {
        x: cursorPosRef.current.x,
        y: cursorPosRef.current.y,
      });
    }
  };

  const triggerLaserHighlight = () => {
    triggerHaptic([40, 20, 60]);
    sendAction("laser_ping", {
      x: cursorPosRef.current.x,
      y: cursorPosRef.current.y,
    });
  };

  const activeMeta = presentationSlidesMeta[currentSlide] || presentationSlidesMeta[0];

  return (
    <div className="min-h-screen bg-[#0A0C0B] text-[#FAF7F2] select-none flex flex-col justify-between p-4 sm:p-6 font-sans touch-none">
      
      {/* ============================================================== */}
      {/* TOP HEADER: BRAND, CONNECTION STATUS & TIMER */}
      {/* ============================================================== */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-neon-green/20 text-neon-green border border-neon-green/30">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="font-serif font-black text-xs sm:text-sm text-ivory-50 tracking-wider">
              RONNIE FUNG
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono">
              <Wifi className={`w-3 h-3 ${isConnected ? "text-neon-green" : "text-amber-400 animate-pulse"}`} />
              <span className={isConnected ? "text-neon-green font-bold" : "text-amber-400"}>
                {rtcConnected ? "⚡ P2P 毫秒级直连" : isConnected ? "已连接投屏" : "连接中..."}
              </span>
            </div>
          </div>
        </div>

        {/* Presentation Stopwatch Timer */}
        <div className="flex items-center gap-2 bg-charcoal-900 border border-white/10 px-3 py-1.5 rounded-full">
          <span className="font-mono text-xs sm:text-sm font-bold text-neon-green min-w-[3rem] text-center">
            {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-1 text-charcoal-400 hover:text-white"
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(0);
            }}
            className="p-1 text-charcoal-400 hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODE SWITCHER: [翻页遥控] VS [激光触控板] */}
      {/* ============================================================== */}
      <div className="pt-3 pb-1">
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-charcoal-900 border border-white/10 text-xs font-serif font-black">
          <button
            onClick={() => setMode("clicker")}
            className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
              mode === "clicker"
                ? "bg-neon-green text-charcoal-950 shadow-neon-glow"
                : "text-charcoal-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>翻页遥控模式</span>
          </button>

          <button
            onClick={() => setMode("trackpad")}
            className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
              mode === "trackpad"
                ? "bg-neon-green text-charcoal-950 shadow-neon-glow"
                : "text-charcoal-400 hover:text-white"
            }`}
          >
            <MousePointer className="w-3.5 h-3.5" />
            <span>激光触控板 🎯</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: CLICKER MODE (GIANT BUTTONS) */}
      {/* ============================================================== */}
      {mode === "clicker" && (
        <div className="my-auto py-4 space-y-4 animate-in fade-in duration-200">
          
          {/* Current Slide Display Card */}
          <div className="p-6 rounded-3xl bg-charcoal-900/90 border-2 border-white/15 shadow-2xl relative overflow-hidden space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-bronze-300 font-bold uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {activeMeta.category}
              </span>

              <div className="flex items-center gap-1.5 font-mono text-sm font-black text-neon-green">
                <span>{currentSlide + 1}</span>
                <span className="text-white/30">/</span>
                <span className="text-charcoal-400">{totalSlides}</span>
              </div>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-black text-ivory-50 leading-snug">
              {activeMeta.title}
            </h2>

            {/* Quick Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-neon-green to-jade-400 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          {/* Giant Next Slide Button */}
          <button
            onClick={handleNext}
            className="w-full py-8 sm:py-10 rounded-3xl bg-gradient-to-r from-jade-700 via-jade-600 to-emerald-600 active:scale-[0.98] text-ivory-50 font-serif font-black text-2xl sm:text-3xl shadow-neon-glow border-2 border-neon-green/40 flex items-center justify-center gap-3 transition-all duration-150 relative overflow-hidden group"
          >
            <span className="relative z-10">下一页 (Next)</span>
            <ChevronRight className="w-8 h-8 relative z-10 group-active:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Row: Prev Slide & Catalog */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`py-5 rounded-2xl border font-serif font-black text-lg flex items-center justify-center gap-2 transition-all active:scale-95 ${
                currentSlide === 0
                  ? "bg-charcoal-900/40 text-charcoal-600 border-white/5 cursor-not-allowed"
                  : "bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 border-white/15"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>上一页</span>
            </button>

            <button
              onClick={() => setShowSlideList(!showSlideList)}
              className="py-5 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 border border-white/15 text-ivory-100 font-serif font-black text-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <List className="w-5 h-5 text-neon-green" />
              <span>大纲目录</span>
            </button>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: MOUSEPAD / LASER POINTER TRACKPAD MODE */}
      {/* ============================================================== */}
      {mode === "trackpad" && (
        <div className="my-auto py-2 space-y-3 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
          
          {/* Trackpad Header Bar */}
          <div className="flex items-center justify-between px-2 text-xs">
            <div className="flex items-center gap-1.5 font-mono text-neon-green font-bold">
              <Crosshair className="w-3.5 h-3.5" />
              <span>手指滑动控制大屏箭头 · 单击高亮聚光</span>
            </div>

            <button
              onClick={() => setSensitivity((prev) => (prev === 1.5 ? 2.2 : 1.5))}
              className="flex items-center gap-1 text-[11px] font-mono text-charcoal-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
            >
              <Sliders className="w-3 h-3" />
              <span>灵敏度: {sensitivity === 1.5 ? "标准" : "高"}</span>
            </button>
          </div>

          {/* Tactile Virtual Mousepad Area */}
          <div
            ref={padRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full flex-1 min-h-[320px] rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-2 border-neon-green/30 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center cursor-crosshair select-none active:border-neon-green transition-colors"
          >
            {/* Subtle Trackpad Crosshair Grid */}
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#00E599 1px, transparent 1px), linear-gradient(90deg, #00E599 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Glowing Touch Follower Circle */}
            {touchFeedback.active && (
              <div
                className="absolute w-14 h-14 rounded-full bg-neon-green/20 border border-neon-green pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-neon-glow"
                style={{
                  left: touchFeedback.x,
                  top: touchFeedback.y,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-neon-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00E599]" />
              </div>
            )}

            {/* Center Pad Prompt */}
            {!touchFeedback.active && (
              <div className="text-center space-y-2 pointer-events-none opacity-40">
                <MousePointer className="w-10 h-10 mx-auto text-neon-green animate-pulse" />
                <p className="font-serif text-sm font-bold text-ivory-100">
                  触控板区域
                </p>
                <p className="text-[11px] font-mono text-charcoal-400">
                  拇指在此任意滑动 · 电脑光标实时同步
                </p>
              </div>
            )}

            {/* Corner Indicators */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-white/20 uppercase tracking-widest">
              VIRTUAL TRACKPAD
            </div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neon-green/40 uppercase tracking-widest">
              TAP TO HIGHLIGHT
            </div>
          </div>

          {/* Mousepad Bottom Quick Controls */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="py-3.5 rounded-2xl bg-charcoal-900 border border-white/10 text-ivory-100 font-serif font-black text-sm flex items-center justify-center gap-1 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一页</span>
            </button>

            <button
              onClick={triggerLaserHighlight}
              className="py-3.5 rounded-2xl bg-neon-green/20 border border-neon-green text-neon-green font-serif font-black text-sm flex items-center justify-center gap-1 shadow-neon-glow active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>激光聚光</span>
            </button>

            <button
              onClick={handleNext}
              className="py-3.5 rounded-2xl bg-gradient-to-r from-jade-700 to-emerald-600 text-ivory-50 font-serif font-black text-sm flex items-center justify-center gap-1 shadow-md active:scale-95"
            >
              <span>下一页</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* BOTTOM UTILITY TOOLBAR */}
      {/* ============================================================== */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-charcoal-400">
        
        {/* Blackout Toggle */}
        <button
          onClick={handleToggleBlackout}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
            isBlackout
              ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
              : "bg-white/5 border-white/10 text-charcoal-400 hover:text-white"
          }`}
        >
          {isBlackout ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          <span>{isBlackout ? "解除黑屏" : "演讲暂停"}</span>
        </button>

        {/* Slide Counter badge */}
        <div className="font-mono text-xs text-charcoal-400">
          <span className="text-neon-green font-bold">{currentSlide + 1}</span> / {totalSlides}
        </div>

        {/* Haptic feedback toggle */}
        <button
          onClick={() => setHapticEnabled(!hapticEnabled)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
            hapticEnabled
              ? "bg-neon-green/10 border-neon-green/40 text-neon-green font-bold"
              : "bg-white/5 border-white/10 text-charcoal-500"
          }`}
        >
          <Vibrate className="w-3.5 h-3.5" />
          <span>{hapticEnabled ? "震动 开" : "关"}</span>
        </button>

      </div>

      {/* ============================================================== */}
      {/* SLIDE CATALOG MODAL (QUICK JUMP TO ANY SLIDE) */}
      {/* ============================================================== */}
      {showSlideList && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-md flex flex-col justify-end p-4 animate-in fade-in">
          <div className="bg-charcoal-900 border-2 border-white/15 rounded-3xl p-5 max-h-[80vh] flex flex-col space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-green" />
                <h3 className="font-serif font-black text-lg text-ivory-50">
                  幻灯片大纲一览 (点击直达)
                </h3>
              </div>
              <button
                onClick={() => setShowSlideList(false)}
                className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-ivory-50"
              >
                关闭
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {presentationSlidesMeta.map((slide) => {
                const isCurrent = slide.index === currentSlide;
                return (
                  <button
                    key={slide.index}
                    onClick={() => handleJump(slide.index)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isCurrent
                        ? "bg-neon-green text-charcoal-950 border-neon-green font-black"
                        : "bg-charcoal-950/80 hover:bg-charcoal-800 text-charcoal-200 border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className={`font-mono text-xs font-extrabold ${isCurrent ? "text-charcoal-950" : "text-neon-green"}`}>
                        {slide.number}
                      </span>
                      <span className="font-serif text-sm truncate">
                        {slide.title}
                      </span>
                    </div>

                    {isCurrent && <Check className="w-4 h-4 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function RemotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0C0B] text-white flex items-center justify-center font-mono text-sm">
        正在初始化遥控器...
      </div>
    }>
      <RemoteController />
    </Suspense>
  );
}
