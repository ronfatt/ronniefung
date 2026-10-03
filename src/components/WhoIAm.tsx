"use client";

import React from "react";
import { whoIAmCards } from "@/data/content";
import { ArrowRight, AlertCircle } from "lucide-react";

export const WhoIAm: React.FC = () => {
  const painPoints = [
    "经验只存在脑里。",
    "理论很难解释。",
    "学生听不懂。",
    "品牌说不清。",
    "系统无法复制。",
    "知识无法数字化。",
  ];

  // Mapping to the Reference Art Installation Nodes: PEOPLE -> KNOWLEDGE -> CONTENT -> SYSTEM -> AI PRODUCT
  const artNodes = [
    "● PEOPLE",
    "● KNOWLEDGE",
    "● CONTENT",
    "● SYSTEM",
    "● AI PRODUCT"
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 02</span>
            <span>/</span>
            <span>CORE POSITIONING</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight mb-8">
            我到底是做什么的？
          </h2>

          <div className="space-y-6 text-lg sm:text-2xl text-charcoal-800 leading-relaxed font-normal">
            <p className="font-medium">
              很多老师有非常深的专业经验与精准研判，但真正的问题往往不是“不会”，而是：
            </p>

            {/* Pain Points Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-ivory-100 border-2 border-ivory-300 text-sm sm:text-base font-bold text-charcoal-900 shadow-xs"
                >
                  <AlertCircle className="w-5 h-5 text-bronze-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <p className="font-serif text-xl sm:text-3xl font-black text-jade-800 pt-3 border-l-4 border-neon-green pl-5 leading-snug">
              我的工作，就是站在老师、用户与科技之间，把复杂的东西重新整理。
            </p>
          </div>
        </div>

        {/* Golden Inscription Banner from Reference Art */}
        <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-[#14281E] border-2 border-[#244b38] text-ivory-50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
            <div>
              <p className="font-serif text-xl sm:text-2xl font-black tracking-wider text-ivory-50">
                “傳承 不是複製 而是升級”
              </p>
              <p className="font-mono text-xs text-bronze-400 font-bold tracking-widest uppercase">
                TRADITION INTO TOMORROW · A BRIGHTER TOMORROW TOGETHER
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-neon-green/90">
            <span>PEOPLE</span>
            <span>→</span>
            <span>KNOWLEDGE</span>
            <span>→</span>
            <span>CONTENT</span>
            <span>→</span>
            <span>SYSTEM</span>
            <span>→</span>
            <span>AI PRODUCT</span>
          </div>
        </div>

        {/* 5 Cards Grid - Enhanced with Node Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoIAmCards.map((card, idx) => {
            const isLast = idx === 4;
            const nodeLabel = artNodes[idx] || "";

            return (
              <div
                key={card.number}
                className={`group rounded-3xl p-7 sm:p-9 border-2 transition-all duration-300 relative flex flex-col justify-between ${
                  isLast
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-charcoal-950 via-[#10241A] to-charcoal-900 text-ivory-50 border-jade-600 shadow-editorial-dark"
                    : "bg-ivory-100 hover:bg-ivory-50 border-ivory-300 hover:border-jade-500 hover:shadow-card-hover text-charcoal-950"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-3xl sm:text-4xl font-black ${
                          isLast ? "text-neon-green" : "text-bronze-700"
                        }`}
                      >
                        {card.number}
                      </span>
                      <span
                        className={`text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-md ${
                          isLast ? "bg-jade-900/80 text-neon-green border border-neon-green/30" : "bg-ivory-200 text-bronze-800"
                        }`}
                      >
                        {nodeLabel}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-mono font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                        isLast
                          ? "bg-jade-900 text-neon-green border border-neon-green/40"
                          : "bg-ivory-200 text-charcoal-700"
                      }`}
                    >
                      {card.accent}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-black mb-1.5 ${
                      isLast ? "text-ivory-50" : "text-charcoal-950"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm uppercase tracking-widest mb-4 font-mono font-bold ${
                      isLast ? "text-neon-green/80" : "text-charcoal-500"
                    }`}
                  >
                    {card.english}
                  </p>

                  <p
                    className={`text-base sm:text-lg leading-relaxed font-medium ${
                      isLast ? "text-ivory-200" : "text-charcoal-700"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-current/15 flex items-center justify-between text-sm sm:text-base font-extrabold">
                  <span className={isLast ? "text-neon-green" : "text-jade-700"}>
                    系统化落地保障
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1.5 ${
                      isLast ? "text-neon-green" : "text-charcoal-600"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
