"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowDown, Layers, Cpu, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-between overflow-hidden bg-ivory-50 bg-digital-grid">
      {/* Dynamic ambient luminous aura */}
      <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-jade-200/40 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-bronze-200/35 rounded-full blur-3xl pointer-events-none" />

      {/* Abstract modern flowing data curve */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full object-cover max-w-7xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -100 200 C 300 100, 500 380, 900 200 C 1100 120, 1300 280, 1500 200"
            stroke="url(#flowGradient1)"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
          <path
            d="M -100 300 C 250 400, 550 160, 850 340 C 1050 440, 1250 280, 1500 320"
            stroke="url(#flowGradient2)"
            strokeWidth="2"
          />
          <circle cx="500" cy="380" r="5" fill="#00E599" className="animate-pulse" />
          <circle cx="850" cy="340" r="6" fill="#C7954D" />
          <circle cx="900" cy="200" r="5" fill="#286D4F" />
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E543D" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00E599" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C7954D" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C7954D" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C7954D" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00E599" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full">
        {/* Modern Pill Label - Larger, Crisp */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ivory-100 border border-ivory-300 text-charcoal-800 text-sm font-bold tracking-wide mb-8 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
          <span className="font-mono text-bronze-700 font-extrabold tracking-widest text-xs sm:text-sm">
            SINCE {siteConfig.since}
          </span>
          <span className="text-charcoal-400">/</span>
          <span className="text-charcoal-800 font-bold">传统智慧 × 品牌 × AI</span>
        </div>

        {/* Large High-Impact Typography */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-charcoal-950 tracking-tighter leading-[1.05]">
            我做的，
            <br />
            <span className="text-charcoal-500 font-bold">不是算命。</span>
          </h1>

          <p className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-jade-700 tracking-tight leading-[1.2] pt-2">
            我把老师几十年的经验，
            <br />
            变成下一代可以使用的系统。
          </p>
        </div>

        {/* English supporting line */}
        <div className="flex items-center gap-3.5 mb-8 sm:mb-10">
          <div className="h-0.5 w-10 bg-bronze-500" />
          <p className="text-sm sm:text-base font-sans tracking-[0.25em] uppercase text-bronze-800 font-extrabold">
            Turning Experience Into Systems
          </p>
        </div>

        {/* Short intro & Core positioning - Big & Punchy */}
        <div className="max-w-3xl space-y-6 mb-10 sm:mb-12">
          <p className="text-lg sm:text-2xl text-charcoal-800 font-medium leading-relaxed">
            我不是命理师。我的工作，是帮助命理师、风水师、心灵导师与传统文化老师，
            把多年累积的经验、理论与方法，重新整理成<span className="font-bold text-charcoal-950 underline decoration-neon-green decoration-4 underline-offset-6">品牌、内容、系统与 AI 产品</span>。
          </p>

          {/* Positioning Tags Pills - Large, Modern Chips */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {["玄学", "心灵", "宗教文化", "品牌策划", "内容系统", "AI 产品策划"].map((item, idx) => (
              <span
                key={item}
                className="inline-flex items-center text-sm sm:text-base font-bold px-4 py-2 rounded-xl bg-ivory-100 text-charcoal-900 border border-ivory-300 shadow-xs hover:border-jade-500 transition-colors"
              >
                {item}
                {idx < 5 && <span className="text-bronze-500 ml-2.5 font-normal">×</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Large, Modern, Tactile */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-base sm:text-lg font-bold tracking-wide transition-all shadow-md hover:shadow-neon-glow active:scale-95 group"
          >
            <Layers className="w-5 h-5 text-neon-green" />
            <span>看看我做过什么</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-ivory-100 hover:bg-ivory-200 border-2 border-jade-600/40 text-jade-900 text-base sm:text-lg font-bold tracking-wide transition-all shadow-xs active:scale-95 group"
          >
            <Cpu className="w-5 h-5 text-bronze-600 group-hover:scale-110 transition-transform" />
            <span>我的玄学 AI Demo (11款原型)</span>
          </button>
        </div>
      </div>

      {/* Hero Bottom Credential strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full pt-14 sm:pt-16">
        <div className="border-t-2 border-ivory-300 pt-6 flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base text-charcoal-600 font-sans font-medium">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-charcoal-950 text-base sm:text-lg">Ronnie Fung</span>
            <span>·</span>
            <span>品牌策划 × 内容架构 × AI 产品策划</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-bold text-charcoal-900">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green" />
              11 个已策划原型
            </span>
            <span className="hidden sm:inline font-bold">近 30 年跨界沉淀</span>
            <a href="#about" className="hover:text-jade-700 flex items-center gap-1.5 font-bold text-charcoal-800">
              向下探索 <ArrowDown className="w-4 h-4 animate-bounce text-jade-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
