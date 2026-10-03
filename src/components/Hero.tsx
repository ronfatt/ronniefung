"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#FAF7F2]">
      {/* Background delicate ink mist texture */}
      <div className="absolute inset-0 bg-digital-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* FAR LEFT: Vertical Brand Tag (Desktop) */}
          <div className="hidden xl:flex lg:col-span-1 flex-col items-start text-[10px] font-mono tracking-[0.25em] text-charcoal-400 font-bold uppercase space-y-3 leading-tight select-none">
            <span className="w-4 h-0.5 bg-charcoal-400" />
            <span>TRADITION</span>
            <span>PEOPLE</span>
            <span>BRAND</span>
            <span>TECHNOLOGY</span>
            <span className="pt-2">A BRIGHTER</span>
            <span>TOMORROW</span>
          </div>

          {/* MAIN LEFT: Core Headline & Copy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Giant Headline: Exact from Mockup */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-[1.12] mb-4 sm:mb-6">
              我做的，
              <br />
              <span className="text-charcoal-850 font-black">不是算命。</span>
            </h1>

            <p className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-charcoal-900 tracking-tight leading-[1.2] mb-6 sm:mb-7">
              把老师脑里的经验，
              <br />
              变成下一代的系统。
            </p>

            {/* Slogan: 玄学  ×  心灵  ×  品牌  ×  AI */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 text-lg sm:text-2xl font-serif font-black text-charcoal-900 mb-4 sm:mb-5 tracking-wide">
              <span>玄学</span>
              <span className="text-bronze-600 font-sans font-normal text-base sm:text-xl">×</span>
              <span>心灵</span>
              <span className="text-bronze-600 font-sans font-normal text-base sm:text-xl">×</span>
              <span>品牌</span>
              <span className="text-bronze-600 font-sans font-normal text-base sm:text-xl">×</span>
              <span className="text-jade-800 font-sans">AI</span>
            </div>

            {/* English supporting line */}
            <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-bronze-800 font-extrabold mb-8 sm:mb-9">
              Turning Experience Into Systems.
            </p>

            {/* Action Buttons: Exactly matching the mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-charcoal-950 hover:bg-jade-900 text-[#FAF7F2] text-sm sm:text-base font-bold tracking-wide transition-all shadow-md active:scale-95 group"
              >
                <span>看看我做过什么</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-charcoal-300 text-charcoal-900 text-sm sm:text-base font-bold tracking-wide transition-all shadow-xs active:scale-95 group"
              >
                <span>我的玄学 AI Demo</span>
                <div className="w-4 h-4 rounded-full border border-charcoal-400 flex items-center justify-center">
                  <Play className="w-2 h-2 text-charcoal-800 fill-charcoal-800 ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          {/* CENTER / RIGHT: Circular Graphic (Ronnie + Pagoda Landscape) */}
          <div className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center py-4">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-bronze-300/80 shadow-2xl bg-[#EBE5D8] flex items-center justify-center group">
              <Image
                src="/images/hero-circle.jpg"
                alt="传统智慧 遇见新的时代 — Ronnie Fung"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Slogan on Circle Edge */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-charcoal-950/70 backdrop-blur-md text-[#FAF7F2] text-[11px] sm:text-xs font-serif font-black tracking-widest whitespace-nowrap border border-white/20">
                传统智慧 · 遇见新的时代
              </div>
            </div>
          </div>

          {/* FAR RIGHT: SINCE 1997 & QUOTE (Desktop) */}
          <div className="hidden xl:flex lg:col-span-1 flex-col justify-between h-72 text-right">
            <div className="space-y-1.5 text-[10px] font-mono tracking-widest text-charcoal-400 uppercase font-bold">
              <p>SAME WISDOM</p>
              <p>A BRIGHTER</p>
              <p>TOMORROW</p>
              <div className="h-0.5 w-6 bg-charcoal-400 ml-auto my-2" />
              <p className="text-[11px] text-charcoal-500">SINCE</p>
              <p className="font-serif text-3xl font-black text-charcoal-900 tracking-normal pt-1">
                1997
              </p>
            </div>

            <div className="text-xs font-serif text-charcoal-600 font-bold leading-relaxed space-y-1 pt-6">
              <p>让更多智慧</p>
              <p className="text-bronze-800">被看见 · 被理解 · 被传承</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
