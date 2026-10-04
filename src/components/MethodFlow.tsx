"use client";

import React from "react";
import { methodSteps } from "@/data/content";


export const MethodFlow: React.FC = () => {
  return (
    <section id="method" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Heading & Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <span className="text-xs font-mono font-black text-bronze-700 tracking-[0.25em] uppercase block">
              MY METHOD
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-charcoal-950 tracking-tight leading-tight">
              传统知识进入 AI，
              <br />
              <span className="text-bronze-800">不是把资料丢进 ChatGPT。</span>
            </h2>

            <div className="space-y-2 text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              <p>
                真正有价值的 AI，必须先理解老师“为什么这样判断”。
              </p>
              <p>
                不是复制一堆术语，而是把老师几十年的经验，变成可以执行的逻辑。
              </p>
            </div>
          </div>

          {/* RIGHT: Connected Pipeline Flow & Calligraphy Watermark */}
          <div className="lg:col-span-7 relative">
            {/* Subtle Calligraphy Background Watermark: 傳承 */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-serif font-black text-[#EDE6D8]/60 pointer-events-none select-none z-0">
              傳承
            </div>

            {/* Horizontal flow pills in 3 rows or flex */}
            <div className="relative z-10 grid grid-cols-3 gap-2.5 sm:gap-3">
              {methodSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F2] border border-[#DDD6C7] flex flex-col items-center justify-center text-center shadow-2xs hover:border-jade-600 transition-colors"
                >
                  <span className="text-xs font-mono text-bronze-700 font-bold mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-black text-charcoal-950 mb-0.5">
                    {step.name}
                  </h4>
                  <p className="text-xs text-charcoal-500 font-mono">
                    {step.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Motto Tagline */}
            <div className="mt-4 pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-mono font-bold text-charcoal-500 uppercase tracking-widest">
              <span>TRADITION → SYSTEM → AI</span>
              <span className="text-bronze-800">TECHNOLOGY SERVES WISDOM NOT REPLACES IT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
