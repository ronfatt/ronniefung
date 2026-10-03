"use client";

import React, { useState } from "react";
import { teacherTypes } from "@/data/teachers";
import { 
  Compass, 
  Home, 
  Binary, 
  HeartPulse, 
  Scroll, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface TeacherSelectorProps {
  onSelectTeacherForChat?: (teacherName: string) => void;
}

export const TeacherSelector: React.FC<TeacherSelectorProps> = ({ onSelectTeacherForChat }) => {
  const [selectedId, setSelectedId] = useState<string>("fengshui");

  const currentTeacher = teacherTypes.find((t) => t.id === selectedId) || teacherTypes[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Binary":
        return <Binary className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "Scroll":
        return <Scroll className="w-5 h-5" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-ivory-100/80 border-y-2 border-ivory-300">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade-100 text-jade-900 text-sm font-bold border border-jade-300 mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-bronze-600" />
            <span>特别互动 · 精准共鸣</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-black text-charcoal-950 tracking-tight">
            “你是哪一种老师？”
          </h2>
          <p className="mt-3 text-base sm:text-xl text-charcoal-700 font-medium">
            点击你的专业领域，看看 Ronnie 能为你搭建怎样的专属交付系统
          </p>
        </div>

        {/* Teacher Category Tabs - Big, Tactile, Modern */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {teacherTypes.map((teacher) => {
            const isSelected = teacher.id === selectedId;
            return (
              <button
                key={teacher.id}
                onClick={() => setSelectedId(teacher.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 p-4 sm:py-3.5 sm:px-4 rounded-2xl text-base font-extrabold transition-all duration-200 ${
                  isSelected
                    ? "bg-charcoal-950 text-ivory-50 shadow-lg scale-[1.03] ring-2 ring-neon-green"
                    : "bg-ivory-50 hover:bg-ivory-200 text-charcoal-800 border-2 border-ivory-300"
                }`}
              >
                <span className={isSelected ? "text-neon-green" : "text-charcoal-500"}>
                  {getIcon(teacher.iconName)}
                </span>
                <span>{teacher.name}</span>
              </button>
            );
          })}
        </div>

        {/* Customized Dynamic Response Card - Oversized, Punchy */}
        <div className="bg-ivory-50 rounded-3xl border-2 border-ivory-300 p-7 sm:p-12 shadow-card-hover transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-jade-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Teacher Tagline & Category */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-ivory-200">
            <div>
              <div className="flex items-center gap-2.5 text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-1.5">
                <span>领域定制解读</span>
                <span>/</span>
                <span className="text-charcoal-900 bg-bronze-100 px-2 py-0.5 rounded">{currentTeacher.name}</span>
              </div>
              <p className="text-sm sm:text-base text-charcoal-600 font-medium">
                涵盖范围：{currentTeacher.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {currentTeacher.focusKeywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-jade-50 text-jade-900 border border-jade-200 font-bold"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Ronnie's Role Statement - Huge & Powerful */}
          <div className="py-8 sm:py-10">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-bronze-700 font-black block mb-3">
              RONNIE’S POSITIONING FOR YOU
            </span>
            <blockquote className="font-sans text-2xl sm:text-4xl md:text-5xl font-black text-charcoal-950 leading-tight tracking-tight">
              “{currentTeacher.ronnieRole}”
            </blockquote>
          </div>

          {/* Deliverables List - Large, Legible */}
          <div className="pt-6 border-t-2 border-ivory-200">
            <h4 className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider text-charcoal-500 mb-4">
              我们可以具体落地的成果交付：
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {currentTeacher.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-ivory-100 border border-ivory-300 text-sm sm:text-base font-bold text-charcoal-900"
                >
                  <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5 fill-jade-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-sm text-charcoal-600 font-medium">
                无论是 10 年名师还是老牌道场，我们均能根据您的流派风格私有化定制。
              </span>
              <button
                onClick={() => {
                  if (onSelectTeacherForChat) {
                    onSelectTeacherForChat(currentTeacher.name);
                  } else {
                    const el = document.getElementById("closing-cta");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-base font-extrabold text-jade-800 hover:text-jade-950 group"
              >
                <span>探讨【{currentTeacher.name}】系统化合作</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 text-neon-green" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
