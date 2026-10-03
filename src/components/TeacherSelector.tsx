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
  ArrowRight
} from "lucide-react";

interface TeacherSelectorProps {
  onSelectTeacherForChat?: (teacherName: string) => void;
}

export const TeacherSelector: React.FC<TeacherSelectorProps> = ({ onSelectTeacherForChat }) => {
  const [selectedId, setSelectedId] = useState<string>("mingli");

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
    <section className="relative py-14 sm:py-20 bg-[#FAF7F2] border-y border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Section Title & Mission statement */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-charcoal-950 tracking-tight mb-2">
              你是哪一种老师？
            </h2>
            <div className="text-xs sm:text-sm font-serif text-charcoal-600 font-bold leading-relaxed space-y-0.5">
              <p>不同的领域，同一个使命。</p>
              <p>让智慧被更多人看见。</p>
            </div>
          </div>

          {/* CENTER: 6 Horizontal Cards */}
          <div className="lg:col-span-6 grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            {teacherTypes.map((teacher) => {
              const isSelected = teacher.id === selectedId;
              return (
                <button
                  key={teacher.id}
                  onClick={() => setSelectedId(teacher.id)}
                  className={`flex flex-col items-center justify-between p-3.5 sm:py-4 sm:px-2 rounded-2xl transition-all duration-200 text-center min-h-[105px] ${
                    isSelected
                      ? "bg-charcoal-950 text-[#FAF7F2] shadow-md border-2 border-charcoal-950"
                      : "bg-[#FAF7F2] hover:bg-[#EFE9DF] text-charcoal-800 border border-[#DDD6C7]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    isSelected ? "text-neon-green" : "text-charcoal-600"
                  }`}>
                    {getIcon(teacher.iconName)}
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-black mb-1">
                    {teacher.name}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-neon-green" : "bg-transparent"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Role Quote Display */}
          <div className="lg:col-span-3 lg:pl-4 border-t lg:border-t-0 lg:border-l border-[#E8E2D5] pt-4 lg:pt-0">
            <div className="space-y-3">
              <blockquote className="font-serif text-lg sm:text-xl font-black text-charcoal-950 leading-snug tracking-tight">
                “{currentTeacher.ronnieRole}”
              </blockquote>
              <div className="h-0.5 w-6 bg-bronze-500" />
              <button
                onClick={() => {
                  if (onSelectTeacherForChat) {
                    onSelectTeacherForChat(currentTeacher.name);
                  } else {
                    const el = document.getElementById("closing-cta");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs font-bold text-jade-800 hover:text-jade-950 inline-flex items-center gap-1 group pt-1"
              >
                <span>预约【{currentTeacher.name}】系统共创</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
