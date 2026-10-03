"use client";

import React from "react";
import Image from "next/image";
import { 
  Compass, 
  BookOpen, 
  Package, 
  Monitor, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

export const WhoIAm: React.FC = () => {
  const cards = [
    {
      icon: <Compass className="w-6 h-6 text-bronze-400" />,
      title: "品牌定位",
      subtitle: "找到老师真正的价值",
      desc: "打破大师同质化，提炼独门定位",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-bronze-400" />,
      title: "理论整理",
      subtitle: "把复杂变简单",
      desc: "把命盘与口诀梳理为可传授架构",
    },
    {
      icon: <Package className="w-6 h-6 text-bronze-400" />,
      title: "产品化",
      subtitle: "课程、咨询、报告",
      desc: "转化成标准化服务与付费会员交付",
    },
    {
      icon: <Monitor className="w-6 h-6 text-neon-green" />,
      title: "数字化",
      subtitle: "Web App、测试工具",
      desc: "打造手机即点即用的高颜值轻应用",
    },
    {
      icon: <Cpu className="w-6 h-6 text-neon-green" />,
      title: "AI 化",
      subtitle: "专属 AI 助手",
      desc: "训练老师独门思维链与 24h 智能分身",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#141715] text-[#FAF7F2] relative overflow-hidden">
      {/* Background delicate subtle grid */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Ronnie Photo with Ink Mountains & Handwritten Signature */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-charcoal-950 flex items-center justify-center">
            <Image
              src="/images/about-ronnie.jpg"
              alt="用创意 连接传统与未来 — Ronnie Fung"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Signature badge */}
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <p className="font-serif text-base sm:text-lg font-black text-ivory-50 tracking-wider">
                用创意 连接传统与未来
              </p>
              <p className="font-mono text-xs text-bronze-300 font-bold uppercase tracking-widest">
                Ronnie Fung
              </p>
            </div>
          </div>

          {/* MIDDLE: ABOUT ME Statement & Button */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase">
              ABOUT ME
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#FAF7F2] tracking-tight">
              我到底是做什么的？
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-charcoal-300 font-normal leading-relaxed">
              <p className="text-ivory-100 font-bold">
                我不是命理师。
              </p>
              <p>
                我的工作，是帮助命理师、风水师、心灵导师等传统文化老师，把多年累积的经验、理论与方法，重新整理成<span className="text-white font-bold underline decoration-neon-green decoration-2 underline-offset-4">品牌、内容、系统与 AI 产品</span>。
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5DFD3] hover:bg-white text-charcoal-950 text-xs sm:text-sm font-black tracking-wide transition-all shadow-md active:scale-95 group"
              >
                <span>了解更多关于我</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: 5 Feature Cards (3 top, 2 bottom) */}
          <div className="lg:col-span-4 space-y-3">
            {/* Top 3 Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {cards.slice(0, 3).map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-2xl bg-charcoal-900/90 border border-white/10 flex flex-col justify-between min-h-[125px] hover:border-bronze-400/50 transition-colors"
                >
                  <div className="mb-2">{c.icon}</div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-black text-ivory-50 mb-0.5">
                      {c.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-charcoal-400 leading-tight">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom 2 Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {cards.slice(3, 5).map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-2xl bg-charcoal-900/90 border border-white/10 flex flex-col justify-between min-h-[125px] hover:border-neon-green/50 transition-colors"
                >
                  <div className="mb-2">{c.icon}</div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-black text-ivory-50 mb-0.5">
                      {c.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-charcoal-400 leading-tight">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
