"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const BigStatement: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen py-28 sm:py-40 bg-charcoal-950 text-ivory-50 flex items-center justify-center overflow-hidden">
      {/* Background ambient dark grid & modern neon glow */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-jade-800/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-14 sm:space-y-20">
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-charcoal-900 border border-charcoal-700 text-neon-green text-sm tracking-widest uppercase font-mono font-bold shadow-neon-glow">
          <Sparkles className="w-4 h-4 text-neon-green animate-pulse" />
          <span>VISION STATEMENT · 时代洞见</span>
        </div>

        {/* Primary Statement - Giant Keynote Scale */}
        <div className="space-y-8 sm:space-y-12">
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-charcoal-300 tracking-tight leading-[1.15]">
            未来真正有价值的，
            <br />
            <span className="font-bold text-charcoal-500">不是 AI 会不会算命。</span>
          </h2>

          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto rounded-full" />

          <p className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ivory-50 via-neon-green to-jade-200 tracking-tighter leading-[1.15]">
            而是：
            <br />
            谁能把几十年的经验，
            <br />
            变成 AI 学得懂的知识。
          </p>
        </div>

        {/* Supporting Punchline */}
        <div className="max-w-3xl mx-auto pt-8 sm:pt-14 border-t-2 border-charcoal-800/80 space-y-5">
          <p className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 leading-relaxed">
            老师不会被 AI 取代。
          </p>
          <p className="font-sans text-2xl sm:text-4xl md:text-5xl font-bold text-charcoal-400 leading-relaxed">
            但不会使用 AI 的知识，
            <br />
            可能会慢慢消失。
          </p>
        </div>
      </div>
    </section>
  );
};
