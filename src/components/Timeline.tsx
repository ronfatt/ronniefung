"use client";

import React from "react";
import { timelineData } from "@/data/timeline";

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header: Left Title + Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 sm:mb-16">
          <div>
            <span className="text-xs font-mono font-black text-bronze-700 tracking-[0.25em] uppercase block mb-1">
              MY JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-charcoal-950 tracking-tight">
              这条路，我走了近 30 年。
            </h2>
          </div>

          <div className="text-right md:text-right font-serif text-xs sm:text-sm font-bold text-charcoal-600 space-y-0.5">
            <p>不同的阶段，同一个信念</p>
            <p className="text-bronze-800">让有价值的知识被更多人受益</p>
          </div>
        </div>

        {/* 8 Connected Nodes Horizontal Timeline Flow */}
        <div className="relative">
          {/* Continuous connection line behind nodes */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#DDD6C7] z-0" />

          {/* Horizontal scroll container for mobile, clean flex on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
            {timelineData.map((item, idx) => {
              const isHighlight = item.year === "2005" || item.year.includes("NOW");

              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circular Node */}
                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-3.5 transition-all duration-300 relative bg-[#F4F0E6] shadow-xs group-hover:scale-110 ${
                    isHighlight
                      ? "border-neon-green bg-charcoal-950 text-neon-green ring-4 ring-jade-100"
                      : "border-bronze-400 text-charcoal-800"
                  }`}>
                    <span className="font-mono text-xs font-black">
                      {item.year.replace("+", "")}
                    </span>
                  </div>

                  {/* Year / Period */}
                  <span className="font-mono text-[11px] font-bold text-bronze-700 uppercase mb-1">
                    {item.period}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-sm sm:text-base font-black text-charcoal-950 mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Short summary */}
                  <p className="text-[11px] sm:text-xs text-charcoal-600 leading-normal max-w-[130px] font-normal">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
