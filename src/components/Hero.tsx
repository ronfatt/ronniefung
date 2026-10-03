"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Layers, Cpu, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#F6F3EC] bg-digital-grid">
      {/* Dynamic ambient gallery lighting */}
      <div className="absolute top-1/4 -left-32 w-[34rem] h-[34rem] bg-jade-200/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-bronze-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Main Hero Split Grid: Left Typography + Right Exhibition Art */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* LEFT COLUMN: Exactly matching the Reference Design layout */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Top Brand Tag with Line: RONNIE FUNG ————— */}
            <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
              <span className="font-mono text-sm sm:text-base font-extrabold tracking-[0.25em] text-charcoal-800 uppercase">
                RONNIE FUNG
              </span>
              <div className="h-0.5 w-16 sm:w-24 bg-bronze-500" />
            </div>

            {/* Giant Headline: Exactly from the Reference Design */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-[1.12] mb-6 sm:mb-8">
              把老师脑里的经验，
              <br />
              <span className="text-charcoal-900">变成下一代的系统。</span>
            </h1>

            {/* Core Slogan: 玄学  ×  心灵  ×  品牌  ×  AI */}
            <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-serif font-black text-charcoal-900 mb-6 sm:mb-8 tracking-wide">
              <span>玄学</span>
              <span className="text-bronze-500 font-sans font-normal text-base sm:text-xl">×</span>
              <span>心灵</span>
              <span className="text-bronze-500 font-sans font-normal text-base sm:text-xl">×</span>
              <span>品牌</span>
              <span className="text-bronze-500 font-sans font-normal text-base sm:text-xl">×</span>
              <span className="text-jade-800 font-sans">AI</span>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-xl text-charcoal-700 font-normal leading-relaxed mb-6 sm:mb-7 max-w-xl">
              我不是命理师。我的工作，是把老师多年累积的理论、经验与方法，整理成品牌、内容、系统与 AI 产品。
            </p>

            {/* English Supporting Line with Bronze Dash */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="h-0.5 w-8 bg-bronze-500" />
              <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-bronze-800 font-extrabold">
                Turning Experience Into Systems.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-charcoal-950 hover:bg-jade-800 text-ivory-50 text-base font-bold tracking-wide transition-all shadow-md hover:shadow-neon-glow active:scale-95 group"
              >
                <Layers className="w-5 h-5 text-neon-green" />
                <span>看看我做过什么</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-ivory-100 hover:bg-ivory-200 border-2 border-jade-600/40 text-jade-900 text-base font-bold tracking-wide transition-all shadow-xs active:scale-95 group"
              >
                <Cpu className="w-5 h-5 text-bronze-600 group-hover:scale-110 transition-transform" />
                <span>我的玄学 AI Demo (11款作品)</span>
              </button>
            </div>

            {/* Bottom Timeline Strip (Exact from Reference Image) */}
            <div className="pt-5 border-t border-ivory-300 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono font-bold text-charcoal-700">
              <span>1997 信仰与宗教</span>
              <span className="text-bronze-400">｜</span>
              <span>2005 品牌策划</span>
              <span className="text-bronze-400">｜</span>
              <span>2018+ 命理品牌</span>
              <span className="text-bronze-400">｜</span>
              <span className="text-jade-800">2024+ AI玄学系统</span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Masterpiece Reference Artwork with Interactive Overlay */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0 flex items-center justify-center">
            {/* Ambient gold glow under artwork */}
            <div className="absolute inset-0 bg-gradient-to-tr from-jade-600/20 via-bronze-400/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-ivory-300/80 shadow-2xl bg-[#1a201c] group">
              <Image
                src="/images/hero-art.jpg"
                alt="把老师脑里的经验，变成下一代的系统 — Ronnie Fung 装置艺术"
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Quick Action Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-4 rounded-2xl bg-charcoal-950/80 backdrop-blur-md border border-ivory-50/15 text-ivory-50 flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
                  <div className="text-xs sm:text-sm font-medium">
                    <span className="font-serif font-black text-ivory-50 block sm:inline mr-2">
                      “傳承 不是複製 而是升級”
                    </span>
                    <span className="text-bronze-300 font-mono text-[11px] sm:text-xs">
                      TRADITION INTO TOMORROW
                    </span>
                  </div>
                </div>

                <a
                  href="#projects"
                  className="px-3.5 py-1.5 rounded-xl bg-jade-700 hover:bg-jade-600 text-ivory-50 text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>看 11 款系统</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-8 flex items-center justify-end">
        <a href="#about" className="hover:text-jade-700 flex items-center gap-2 font-bold text-sm text-charcoal-600">
          <span>向下探索</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-jade-700" />
        </a>
      </div>
    </section>
  );
};
