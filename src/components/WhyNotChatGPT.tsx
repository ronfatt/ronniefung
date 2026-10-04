"use client";

import React, { useState } from "react";
import { whyNotChatGPTData } from "@/data/comparison";
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Layers, 
  FileText, 
  Database, 
  Lock,
  Compass
} from "lucide-react";

export const WhyNotChatGPT: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("source");

  const activeDimension = 
    whyNotChatGPTData.dimensions.find((d) => d.id === activeTab) || 
    whyNotChatGPTData.dimensions[0];

  const dimensionIcons: Record<string, React.ElementType> = {
    source: Database,
    architecture: Layers,
    consistency: Compass,
    journey: FileText,
    assets: Lock,
  };

  return (
    <section 
      id="why-not-chatgpt" 
      className="py-24 sm:py-32 bg-[#FAF7F2] text-charcoal-900 relative overflow-hidden border-t border-[#E8E2D5]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-bronze-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ============================================================== */}
        {/* SECTION HEADER */}
        {/* ============================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-950 text-ivory-50 text-xs sm:text-sm font-mono tracking-widest uppercase font-bold shadow-sm">
            <Bot className="w-3.5 h-3.5 text-neon-green" />
            <span>{whyNotChatGPTData.sectionBadge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-charcoal-950 tracking-tight leading-[1.15]">
            为什么不是直接用 ChatGPT？
          </h2>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-bronze-700 tracking-tight">
            {whyNotChatGPTData.subHeading}
          </p>

          <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed pt-2 max-w-3xl mx-auto">
            {whyNotChatGPTData.leadParagraph}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 5 DIMENSIONS INTERACTIVE TABS */}
        {/* ============================================================== */}
        <div className="space-y-6">
          {/* Tab Selection Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {whyNotChatGPTData.dimensions.map((dim) => {
              const isActive = dim.id === activeTab;
              const IconComp = dimensionIcons[dim.id] || Sparkles;

              return (
                <button
                  key={dim.id}
                  onClick={() => setActiveTab(dim.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-xs sm:text-sm font-serif font-black transition-all duration-300 border ${
                    isActive
                      ? "bg-charcoal-950 text-ivory-50 border-charcoal-950 shadow-lg scale-105"
                      : "bg-[#F3EFE6] hover:bg-[#EAE4D7] text-charcoal-700 border-[#DDD6C7]"
                  }`}
                >
                  <span className={`font-mono text-xs ${isActive ? "text-neon-green font-bold" : "text-bronze-600"}`}>
                    {dim.number}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? "text-neon-green" : "text-charcoal-500"}`} />
                  <span>{dim.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Comparison Cards (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            
            {/* LEFT CARD: 通用 AI (ChatGPT / DeepSeek) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-[#DDD6C7] shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-200">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-charcoal-400 font-bold block">
                        GENERAL AI BOT
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-black text-charcoal-900">
                        {activeDimension.genericAI.label}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-charcoal-400 font-bold">
                    通用聊天型
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {activeDimension.genericAI.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold text-sm mt-0.5">✕</span>
                      <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verdict for Generic AI */}
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 text-xs sm:text-sm text-red-900 font-medium">
                <span className="font-bold block mb-0.5">局限总结：</span>
                {activeDimension.genericAI.summary}
              </div>
            </div>

            {/* RIGHT CARD: 老师专属平台 (Custom Platform) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141715] text-[#FAF7F2] border-2 border-jade-600/40 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle green ambient spotlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-neon-green/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-neon-green/20 text-neon-green border border-neon-green/40">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-neon-green font-bold block">
                        CUSTOM METAPHYSICS ENGINE
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-black text-ivory-50">
                        {activeDimension.customPlatform.label}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-neon-green font-bold px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30">
                    深度工程化
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {activeDimension.customPlatform.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-neon-green font-bold text-sm mt-0.5">✓</span>
                      <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed font-normal">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verdict for Custom Platform */}
              <div className="p-4 rounded-2xl bg-jade-950/80 border border-neon-green/30 text-xs sm:text-sm text-ivory-100 font-medium relative z-10">
                <span className="text-neon-green font-bold block mb-0.5">核心价值：</span>
                {activeDimension.customPlatform.summary}
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* ESSENTIAL CONTRAST BOX: THE SPOKEN DIFFERENCE */}
        {/* ============================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#ECE7DC] border-2 border-[#DDD6C7] space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-bronze-700 font-black">
              THE MASTER&apos;S TOUCH · 最直观的语言差异
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-charcoal-950">
              当一位用户提出具体的命运与发展困惑时：
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            
            {/* Generic Response Quote */}
            <div className="p-6 rounded-2xl bg-white border border-[#DDD6C7] space-y-2 relative">
              <span className="text-xs font-mono text-charcoal-400 font-bold block">
                ChatGPT 会对用户说：
              </span>
              <p className="font-serif text-base sm:text-lg text-charcoal-600 italic leading-relaxed">
                {whyNotChatGPTData.keyContrast.genericExample}
              </p>
              <span className="text-xs text-charcoal-400 font-mono block pt-1">
                → 泛泛而谈，千人一面，没有实际落地行动抓手。
              </span>
            </div>

            {/* Custom Platform Response Quote */}
            <div className="p-6 rounded-2xl bg-charcoal-950 text-ivory-50 border border-neon-green/40 shadow-lg space-y-2 relative">
              <span className="text-xs font-mono text-neon-green font-bold block">
                老师专属平台 会对用户说：
              </span>
              <p className="font-serif text-base sm:text-lg text-ivory-100 font-bold italic leading-relaxed">
                {whyNotChatGPTData.keyContrast.customExample}
              </p>
              <span className="text-xs text-neon-green font-mono block pt-1">
                → 基于独家规则与历史画像，直击核心，并自动引导老师后续服务。
              </span>
            </div>

          </div>

          <p className="text-center font-mono text-xs sm:text-sm text-bronze-800 font-bold tracking-wide">
            {whyNotChatGPTData.keyContrast.tagline}
          </p>
        </div>

        {/* ============================================================== */}
        {/* ONE-SENTENCE SUMMARY & FINAL VISION BANNER */}
        {/* ============================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-charcoal-950 via-[#18201A] to-charcoal-950 text-[#FAF7F2] text-center space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-neon-green uppercase tracking-[0.25em] block">
              SUMMARY & STRATEGIC VISION
            </span>

            <p className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-ivory-50 leading-tight">
              {whyNotChatGPTData.oneLineSummary.part1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-jade-300 to-bronze-300">
                {whyNotChatGPTData.oneLineSummary.part2}
              </span>
            </p>
          </div>

          <div className="h-px w-24 bg-white/20 mx-auto" />

          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-lg sm:text-2xl font-serif text-charcoal-300 font-bold">
              {whyNotChatGPTData.finalVision.line1}
            </p>
            <p className="text-xl sm:text-3xl font-serif font-black text-neon-green">
              {whyNotChatGPTData.finalVision.line2}
            </p>
          </div>

          {/* Quick Anchor Link to See Architecture */}
          <div className="pt-2">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-neon-green hover:text-charcoal-950 text-xs sm:text-sm font-serif font-black transition-all border border-white/20 text-ivory-50"
            >
              <span>查看我是如何为你架构整套系统的</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
