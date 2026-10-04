"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
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
  Sparkles
} from "lucide-react";

function RemoteController() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room") || "default";

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isBlackout, setIsBlackout] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [showSlideList, setShowSlideList] = useState<boolean>(false);
  const [hapticEnabled, setHapticEnabled] = useState<boolean>(true);

  // Presentation stopwatch timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

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

  // Send action to computer via pubsub
  const sendAction = useCallback(async (action: string, payload: Record<string, unknown> = {}) => {
    triggerHaptic( action === "next" ? [35, 15, 35] : 25 );

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
  }, [roomId, triggerHaptic]);

  // Connect to SSE stream to receive computer feedback & sync
  useEffect(() => {
    if (!roomId) return;

    // Send a ping message so computer knows phone has connected
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
      // Reconnection handled automatically by browser
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

  const activeMeta = presentationSlidesMeta[currentSlide] || presentationSlidesMeta[0];

  return (
    <div className="min-h-screen bg-[#0A0C0B] text-[#FAF7F2] select-none flex flex-col justify-between p-4 sm:p-6 font-sans">
      
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
                {isConnected ? "已连接投屏" : "连接中..."}
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
      {/* CENTER: CURRENT SLIDE CARD & THUMBNAIL INFO */}
      {/* ============================================================== */}
      <div className="my-auto py-4 space-y-4">
        
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

        {/* ============================================================== */}
        {/* GIANT TACTILE CLICKER BUTTONS */}
        {/* ============================================================== */}
        <div className="space-y-3">
          
          {/* BIG NEXT SLIDE BUTTON (Giant for natural thumb reach) */}
          <button
            onClick={handleNext}
            className="w-full py-8 sm:py-10 rounded-3xl bg-gradient-to-r from-jade-700 via-jade-600 to-emerald-600 active:scale-[0.98] text-ivory-50 font-serif font-black text-2xl sm:text-3xl shadow-neon-glow border-2 border-neon-green/40 flex items-center justify-center gap-3 transition-all duration-150 relative overflow-hidden group"
          >
            <span className="relative z-10">下一页 (Next)</span>
            <ChevronRight className="w-8 h-8 relative z-10 group-active:translate-x-1 transition-transform" />
          </button>

          {/* SECONDARY ROW: PREV SLIDE & CATALOG */}
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

      </div>

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
          <span>{hapticEnabled ? "震动反馈 开" : "震动 关"}</span>
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
