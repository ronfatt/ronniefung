"use client";

import React from "react";
import Image from "next/image";

export const BigStatement: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] py-20 sm:py-28 bg-[#0D100E] text-[#FAF7F2] flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Mountain Sunset Graphic */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Image
          src="/images/philosophy-bg.jpg"
          alt="Misty Mountain Twilight"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Label & First statement */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase block">
              MY PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#FAF7F2] tracking-tight leading-[1.15]">
              未来真正有价值的，
              <br />
              <span className="text-charcoal-400 font-bold">不是 AI 会不会算命。</span>
            </h2>
          </div>

          {/* MIDDLE: Core turnaround & Explanation Box */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ivory-50 via-neon-green to-jade-200 tracking-tight leading-snug">
              而是：
              <br />
              谁能把几十年的经验，
              <br />
              变成 AI 学得懂的知识。
            </h3>

            <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-white/10 text-xs sm:text-sm text-charcoal-300 space-y-1 backdrop-blur-sm">
              <p className="font-serif font-bold text-ivory-100">老师不会被 AI 取代。</p>
              <p className="font-normal text-charcoal-400">但不会使用 AI 的知识，可能会慢慢消失。</p>
            </div>
          </div>

          {/* RIGHT: Glowing Circular Mission Emblem */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full border border-bronze-400/40 p-3 flex items-center justify-center relative shadow-gold-glow bg-charcoal-950/60 backdrop-blur-md">
              <div className="w-full h-full rounded-full border-2 border-dashed border-bronze-300/60 flex flex-col items-center justify-center text-center p-4 space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">MISSION</span>
                <p className="font-serif text-xs sm:text-sm font-black text-ivory-50 leading-tight">
                  不同的时代
                  <br />
                  同一个使命
                </p>
                <p className="text-[11px] font-serif text-neon-green font-bold">让更多人受益</p>
                <span className="text-[9px] font-mono tracking-[0.2em] text-charcoal-500 uppercase pt-1">
                  A BRIGHTER TOMORROW
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
