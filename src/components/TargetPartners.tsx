"use client";

import React from "react";
import { 
  Sparkles, 
  Lightbulb, 
  Smartphone, 
  Bot, 
  Clock, 
  ArrowRight 
} from "lucide-react";

interface TargetPartnersProps {
  onPartnerSelect?: (title: string) => void;
}

export const TargetPartners: React.FC<TargetPartnersProps> = ({ onPartnerSelect }) => {
  const criteria = [
    {
      icon: <Clock className="w-5 h-5 text-bronze-700" />,
      text: "有 10-30 年经验，但知识还没系统化",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-bronze-700" />,
      text: "有自己的理论，但不知道怎么做成产品",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-bronze-700" />,
      text: "想做自己的 App，但不知道从哪里开始",
    },
    {
      icon: <Bot className="w-5 h-5 text-neon-green" />,
      text: "想建立 AI 老师，让学生随时使用",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-bronze-700" />,
      text: "不只是靠一对一咨询，想把经验留下来",
    },
  ];

  return (
    <section id="collaboration" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Section Title */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-black text-bronze-700 tracking-[0.25em] uppercase block mb-1">
              LET’S WORK TOGETHER
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-charcoal-950 tracking-tight leading-snug">
              我正在找这样的老师合作。
            </h2>
          </div>

          {/* MIDDLE: 5 Criteria Mini-Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {criteria.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onPartnerSelect && onPartnerSelect(item.text)}
                className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DDD6C7] hover:border-jade-600 transition-colors flex flex-col items-center justify-between text-center min-h-[110px] cursor-pointer group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-[11px] sm:text-xs text-charcoal-800 font-bold leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Shift Statement & Button */}
          <div className="lg:col-span-3 lg:pl-4 border-t lg:border-t-0 lg:border-l border-[#E8E2D5] pt-4 lg:pt-0 flex flex-col justify-center space-y-3">
            <div className="font-serif text-base sm:text-lg font-black text-charcoal-950 leading-snug">
              <p>从一个老师的经验，</p>
              <p className="text-jade-800">变成一整套数字资产。</p>
            </div>

            <button
              onClick={() => onPartnerSelect && onPartnerSelect("全面系统化合作探讨")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal-950 hover:bg-jade-900 text-[#FAF7F2] text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-sm active:scale-95 group w-full sm:w-auto"
            >
              <span>和我聊聊</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
