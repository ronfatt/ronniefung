"use client";

import React from "react";
import { targetPartners } from "@/data/content";
import { CheckCircle2, ArrowRight, UserCheck } from "lucide-react";

interface TargetPartnersProps {
  onPartnerSelect?: (title: string) => void;
}

export const TargetPartners: React.FC<TargetPartnersProps> = ({ onPartnerSelect }) => {
  return (
    <section id="collaboration" className="py-20 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 07</span>
            <span>/</span>
            <span>PARTNERSHIP CRITERIA</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight mb-5">
            我正在找这样的老师合作。
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal-800 leading-relaxed font-normal">
            我们不寻求泛滥的外包项目，而是寻找在自身领域拥有深厚真才实学、并愿意拥抱数字化未来的同行者：
          </p>
        </div>

        {/* 5 Criteria Cards - Large Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetPartners.map((partner, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={partner.number}
                onClick={() => onPartnerSelect && onPartnerSelect(partner.title)}
                className={`group rounded-3xl p-7 sm:p-9 border-2 border-ivory-300 bg-ivory-100 hover:bg-ivory-50 transition-all duration-300 hover:border-jade-500 hover:shadow-card-hover flex flex-col justify-between cursor-pointer ${
                  isWide ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-bronze-700">
                      {partner.number}
                    </span>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-ivory-200 text-charcoal-800">
                      {partner.tag}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-black text-charcoal-950 mb-3 group-hover:text-jade-800 transition-colors">
                    {partner.title}
                  </h3>

                  <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-medium">
                    {partner.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-200 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-jade-700">
                    点击探讨此需求
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-neon-green" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Box Callout - Large Modern Pill Card */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-jade-50 border-2 border-jade-300 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-4">
            <UserCheck className="w-8 h-8 text-jade-800 shrink-0" />
            <p className="text-base sm:text-xl text-jade-950 font-medium leading-snug">
              <span className="font-black text-jade-950">你负责提供原汁原味的研判智慧</span>，技术开发、AI 调优与品牌视觉由 Ronnie 团队全流程闭环落地。
            </p>
          </div>
          <a
            href="#closing-cta"
            className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-jade-900 hover:text-jade-950 underline underline-offset-6 whitespace-nowrap group"
          >
            <span>预约深度交流</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
