"use client";

import React, { useState } from "react";
import { possibleProductsList } from "@/data/content";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const PossibleProducts: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>("p11");

  return (
    <section className="py-20 sm:py-32 bg-ivory-100/70 border-t-2 border-ivory-300 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 08</span>
            <span>/</span>
            <span>PRODUCT HORIZONS</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight mb-5">
            我们可以一起做什么？
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal-800 font-medium">
            涵盖 AI 智能体、算法引擎、知识库到高净值会员系统的全栈数字化资产：
          </p>
        </div>

        {/* Highlight Banner - Oversized Punchy Statement */}
        <div className="mb-12 p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-ivory-50 border-2 border-charcoal-800 text-center relative overflow-hidden shadow-editorial-dark">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neon-green font-black block">
              CORE VALUE SHIFT · 核心认知跃迁
            </span>
            <p className="font-sans text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ivory-50 via-neon-green to-jade-200 tracking-tight leading-tight">
              从一个老师的经验，变成一整套数字资产。
            </p>
            <p className="text-base sm:text-xl text-charcoal-300 font-normal max-w-2xl mx-auto pt-2">
              不再受限于物理时间与单一身体的精力消耗，让你的知识在互联网与 AI 时代拥有自己的指数级复利。
            </p>
          </div>
        </div>

        {/* 12 Interactive Grid Items - Larger Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {possibleProductsList.map((product) => {
            const isHovered = activeItem === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setActiveItem(product.id)}
                className={`p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "bg-ivory-50 border-jade-600 shadow-md ring-2 ring-neon-green scale-[1.02]"
                    : "bg-ivory-50/90 hover:bg-ivory-50 border-ivory-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-lg bg-ivory-200 text-charcoal-800">
                      {product.category}
                    </span>
                    <Sparkles className={`w-4 h-4 ${isHovered ? "text-neon-green" : "text-charcoal-300"}`} />
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-black text-charcoal-950 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-ivory-200 text-xs sm:text-sm font-black text-jade-700 flex items-center justify-between">
                  <span>支持私有化部署</span>
                  <CheckCircle2 className="w-4 h-4 text-neon-green" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
