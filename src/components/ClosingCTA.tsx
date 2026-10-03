"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  MessageCircle, 
  QrCode, 
  Layers, 
  ArrowUpRight, 
  Sparkles
} from "lucide-react";

interface ClosingCTAProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenContact, onOpenDemo }) => {
  const [copiedWechat, setCopiedWechat] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(siteConfig.contact.wechat);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="closing-cta" className="py-24 sm:py-40 bg-ivory-100 border-t-2 border-ivory-300 relative overflow-hidden">
      {/* Background soft ambient glowing spheres */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-gradient-to-tr from-jade-200/40 via-neon-green/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ivory-50 border border-ivory-300 text-charcoal-800 text-xs sm:text-sm font-mono uppercase tracking-widest font-extrabold mb-10 shadow-xs">
          <Sparkles className="w-4 h-4 text-neon-green animate-pulse" />
          <span>CALL TO COLLABORATION · 共创未来</span>
        </div>

        {/* Large Ending Statement - Huge Headline */}
        <div className="space-y-8 sm:space-y-10 mb-14 sm:mb-20">
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-charcoal-950 tracking-tight leading-[1.12]">
            如果你有一套
            <br />
            做了 10 年、20 年、30 年的方法，
          </h2>

          <p className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold text-charcoal-500 tracking-tight">
            不要只留在自己的脑里。
          </p>

          <p className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-jade-700 tracking-tight leading-[1.12]">
            我们可以把它
            <br />
            变成下一代的系统。
          </p>
        </div>

        {/* Ronnie Signature & Titles - Large Card */}
        <div className="inline-block p-8 sm:p-10 rounded-3xl bg-ivory-50 border-2 border-ivory-300 shadow-card-hover mb-12 max-w-xl w-full text-center">
          <p className="font-sans text-3xl sm:text-5xl font-black text-charcoal-950 mb-3">
            Ronnie Fung
          </p>
          <div className="text-sm sm:text-base font-sans text-charcoal-700 font-bold space-y-1.5">
            <p className="tracking-widest uppercase text-bronze-800 font-mono font-black text-xs sm:text-sm">
              Brand Strategist · Knowledge Architect · AI Product Planner
            </p>
            <p className="text-charcoal-600 text-base sm:text-lg">
              品牌策划 × 内容架构 × AI 产品策划
            </p>
          </div>
        </div>

        {/* CTA Buttons - Large, Modern, Tactile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-lg sm:text-xl font-black tracking-wide transition-all shadow-md hover:shadow-neon-glow active:scale-95 group"
          >
            <MessageCircle className="w-6 h-6 text-neon-green" />
            <span>和我聊聊</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-neon-green" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-ivory-50 hover:bg-ivory-200 border-2 border-ivory-300 text-charcoal-900 text-lg sm:text-xl font-black tracking-wide transition-all shadow-sm active:scale-95"
          >
            <Layers className="w-6 h-6 text-jade-700" />
            <span>看看我的 Demo (11款原型)</span>
          </button>
        </div>

        {/* WhatsApp & WeChat QR Quick Strip - Big Touch Friendly */}
        <div className="max-w-lg mx-auto p-6 rounded-3xl bg-ivory-50 border-2 border-ivory-300 flex items-center justify-between gap-6 shadow-sm">
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 text-sm sm:text-base font-bold text-charcoal-900 hover:text-emerald-700 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block font-black text-sm sm:text-base">WhatsApp 联系</span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono font-medium">
                {siteConfig.contact.whatsapp}
              </span>
            </div>
          </a>

          <div className="h-10 w-0.5 bg-ivory-300" />

          {/* WeChat Quick Copy */}
          <button
            onClick={handleCopyWeChat}
            className="flex items-center gap-3.5 text-sm sm:text-base font-bold text-charcoal-900 hover:text-jade-700 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-2xl bg-charcoal-950 text-white flex items-center justify-center shrink-0 shadow-sm">
              <QrCode className="w-5 h-5 text-neon-green" />
            </div>
            <div>
              <span className="block font-black text-sm sm:text-base">微信 WeChat</span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono font-medium">
                {copiedWechat ? "已复制微信号 ✓" : siteConfig.contact.wechat}
              </span>
            </div>
          </button>
        </div>

        {/* Footer subtle rights */}
        <div className="mt-20 pt-10 border-t-2 border-ivory-300 text-sm text-charcoal-500 space-y-2 font-medium">
          <p>© {new Date().getFullYear()} Ronnie Fung. All Rights Reserved.</p>
          <p className="text-xs sm:text-sm">
            传统智慧 × 品牌策划 × 内容系统 × AI 产品策划 · Designed for High-Impact Metaphysics Pioneers
          </p>
        </div>
      </div>
    </section>
  );
};
