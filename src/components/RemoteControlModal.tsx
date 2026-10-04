"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { 
  X, 
  Smartphone, 
  Check, 
  Copy, 
  Wifi, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";

interface RemoteControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
  isConnected: boolean;
}

export const RemoteControlModal: React.FC<RemoteControlModalProps> = ({
  isOpen,
  onClose,
  roomId,
  isConnected,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [remoteUrl, setRemoteUrl] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/remote?room=${roomId}`;
      setRemoteUrl(url);

      if (canvasRef.current && isOpen) {
        QRCode.toCanvas(
          canvasRef.current,
          url,
          {
            width: 240,
            margin: 1.5,
            color: {
              dark: "#0A0C0B",
              light: "#FAF7F2",
            },
          },
          (error) => {
            if (error) console.error("QR Code generation error:", error);
          }
        );
      }
    }
  }, [isOpen, roomId]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (navigator.clipboard && remoteUrl) {
      navigator.clipboard.writeText(remoteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-charcoal-900 border-2 border-neon-green/40 rounded-3xl p-6 sm:p-8 text-[#FAF7F2] shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-charcoal-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono font-bold tracking-widest uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>PHONE REMOTE CLICKER</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-black text-ivory-50">
            手机无线遥控器
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-300">
            微信或手机相机扫码，手机秒变激光翻页笔
          </p>
        </div>

        {/* QR Code Card */}
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#FAF7F2] shadow-inner relative group">
          <canvas ref={canvasRef} className="rounded-xl" />
          
          <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-charcoal-700 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-neon-green" />
            <span>无需安装任何 App · 即开即控</span>
          </div>
        </div>

        {/* Connection Status Pill */}
        <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
          isConnected
            ? "bg-neon-green/10 border-neon-green/60 text-neon-green"
            : "bg-white/5 border-white/10 text-charcoal-300"
        }`}>
          <div className="flex items-center gap-2.5">
            <Wifi className={`w-4 h-4 ${isConnected ? "animate-pulse text-neon-green" : "text-charcoal-500"}`} />
            <span className="text-xs font-mono font-bold">
              {isConnected ? "🟢 手机已成功连接配对" : "🟡 等待手机扫码连接..."}
            </span>
          </div>

          <span className="text-[10px] font-mono opacity-80">
            ROOM: {roomId.slice(-6).toUpperCase()}
          </span>
        </div>

        {/* Instructions & Features */}
        <div className="space-y-2 text-xs text-charcoal-300">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
            <span>支持上下翻页触感震动反馈，走动演讲毫无延迟。</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
            <span>手机端支持全览 11 页大纲，点击任意一页直接跨页跳转。</span>
          </div>
        </div>

        {/* URL Link Copy Fallback */}
        <div className="pt-2 flex items-center gap-2">
          <div className="flex-1 bg-charcoal-950 px-3 py-2 rounded-xl border border-white/10 text-xs font-mono text-charcoal-400 truncate">
            {remoteUrl}
          </div>

          <button
            onClick={handleCopyLink}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-neon-green hover:text-charcoal-950 transition-colors text-ivory-50 flex-shrink-0"
            title="复制遥控器链接"
          >
            {copied ? <Check className="w-4 h-4 text-neon-green" /> : <Copy className="w-4 h-4" />}
          </button>

          <a
            href={remoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-ivory-50 flex-shrink-0"
            title="在新标签测试遥控器"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
