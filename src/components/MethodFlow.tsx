"use client";

import React, { useState } from "react";
import { methodSteps } from "@/data/content";
import { 
  ArrowRight, 
  AlertTriangle,
  Lightbulb
} from "lucide-react";

export const MethodFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section id="method" className="py-20 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 05</span>
            <span>/</span>
            <span>METHODOLOGY</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight mb-8">
            传统知识进入 AI，
            <br />
            <span className="text-bronze-700 underline decoration-neon-green decoration-4 underline-offset-6">
              不是把资料丢进 ChatGPT。
            </span>
          </h2>

          <div className="p-5 sm:p-6 rounded-3xl bg-amber-100/80 border-2 border-amber-300 text-amber-950 text-base sm:text-lg leading-relaxed mb-8 flex items-start gap-4 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-black block mb-1 text-base sm:text-lg">常见的误区与失败做法：</span>
              直接把几本厚书或公开八字资料丢给通用 AI，结果只会产出一堆晦涩空洞、真假难辨的套话术语，失去老师独特的灵魂与精准度。
            </div>
          </div>

          <p className="font-sans text-2xl sm:text-3xl font-black text-jade-800 leading-snug">
            真正有价值的 AI，必须先理解老师“为什么这样判断”。
            <br />
            不是复制一堆术语，而是把老师几十年的经验，变成可以执行的逻辑。
          </p>
        </div>

        {/* Visual Process Flow (The 9-step progression) */}
        <div className="bg-ivory-100/90 rounded-3xl border-2 border-ivory-300 p-7 sm:p-12 shadow-card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10 pb-5 border-b-2 border-ivory-300">
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-charcoal-500 font-extrabold">
                SYSTEM PIPELINE
              </span>
              <h3 className="font-sans text-2xl sm:text-4xl font-black text-charcoal-950">
                知识结构化与 AI 工程九步流水线
              </h3>
            </div>
            <span className="self-start sm:self-auto text-xs sm:text-sm px-4 py-1.5 rounded-full bg-jade-100 text-jade-900 border border-jade-300 font-extrabold">
              4 大核心落地阶段
            </span>
          </div>

          {/* Steps Grid / Flow - Large Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodSteps.map((item, index) => {
              const isSelected = activeStep === item.step;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(item.step)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-ivory-50 border-jade-600 shadow-md ring-2 ring-neon-green scale-[1.02]"
                      : "bg-ivory-50/90 hover:bg-ivory-50 border-ivory-300 hover:border-ivory-400"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-black text-bronze-800 bg-ivory-200 px-3 py-1 rounded-lg">
                        STEP {item.step}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-jade-50 text-jade-800 border border-jade-200">
                        {item.phase}
                      </span>
                    </div>

                    <h4 className="font-sans text-2xl font-black text-charcoal-950 mb-0.5">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-charcoal-500 font-bold mb-3">
                      {item.sub}
                    </p>

                    <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {index < methodSteps.length - 1 && (
                    <div className="pt-4 mt-4 border-t border-ivory-200 flex items-center justify-end text-charcoal-400">
                      <ArrowRight className="w-4 h-4 text-neon-green" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Summary Footnote */}
          <div className="mt-10 pt-7 border-t-2 border-ivory-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm sm:text-base text-charcoal-700 font-bold">
              <Lightbulb className="w-5 h-5 text-bronze-600 shrink-0" />
              <span>不仅交付软件代码，更帮助老师完成一生经验的知识沉淀与资产梳理。</span>
            </div>
            <a
              href="#collaboration"
              className="text-base sm:text-lg font-black text-jade-800 hover:text-jade-950 inline-flex items-center gap-2 group"
            >
              <span>查看合作形式与对象</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 text-neon-green" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
