"use client";

import React from "react";
import { Quote } from "lucide-react";

export const PersonalPhilosophy: React.FC = () => {
  return (
    <section className="py-20 sm:py-36 bg-ivory-50 relative overflow-hidden">
      {/* Background soft aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-jade-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 09</span>
            <span>/</span>
            <span>PHILOSOPHY</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight">
            我对玄学的看法
          </h2>
        </div>

        {/* Editorial Manifest Card - Big Bold Modern Style */}
        <div className="p-8 sm:p-16 rounded-3xl bg-ivory-100 border-2 border-ivory-300 shadow-card-hover relative">
          <Quote className="w-16 h-16 text-bronze-300/50 absolute top-8 right-8 pointer-events-none" />

          <div className="space-y-10 font-sans">
            {/* Opening Stance - Big */}
            <div className="border-b-2 border-ivory-200 pb-8">
              <p className="text-3xl sm:text-5xl font-black text-charcoal-950 tracking-tight leading-tight">
                我不急着证明
                <br />
                <span className="text-bronze-800 font-black">“哪一种玄学最准”。</span>
              </p>
            </div>

            {/* Core Curiosity - Large lines */}
            <div>
              <p className="text-base sm:text-xl text-charcoal-500 font-mono uppercase tracking-widest font-extrabold mb-6">
                我更感兴趣的是：
              </p>

              <ul className="space-y-5 text-xl sm:text-3xl text-charcoal-900 font-black tracking-tight">
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-neon-green shrink-0 ring-4 ring-jade-100" />
                  <span>为什么老师会这样判断？</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-neon-green shrink-0 ring-4 ring-jade-100" />
                  <span>判断背后有什么逻辑？</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-neon-green shrink-0 ring-4 ring-jade-100" />
                  <span>哪些来自传统规则？</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-neon-green shrink-0 ring-4 ring-jade-100" />
                  <span>哪些来自几十年的经验？</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-bronze-500 shrink-0 ring-4 ring-bronze-100" />
                  <span className="text-jade-900 underline decoration-neon-green decoration-4 underline-offset-6">
                    哪些可以被系统化？
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-bronze-500 shrink-0 ring-4 ring-bronze-100" />
                  <span className="text-charcoal-950">
                    哪些必须保留人的判断？
                  </span>
                </li>
              </ul>
            </div>

            {/* Final Stand - High Impact */}
            <div className="pt-10 border-t-2 border-ivory-300 space-y-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-charcoal-500">
                科技不应该取代老师。
              </p>
              <p className="text-3xl sm:text-5xl md:text-6xl font-black text-jade-700 tracking-tight leading-tight">
                科技应该帮助老师
                <br />
                把知识留下来。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
