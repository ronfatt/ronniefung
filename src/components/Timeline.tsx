"use client";

import React, { useState } from "react";
import { timelineData } from "@/data/timeline";
import { MapPin, Quote, ChevronDown, ChevronUp } from "lucide-react";

export const Timeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(2);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="timeline" className="py-20 sm:py-32 bg-ivory-100/70 border-t-2 border-ivory-300 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 03</span>
            <span>/</span>
            <span>30-YEAR JOURNEY</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight mb-5">
            这条路，我走了近 30 年。
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal-700 font-medium">
            从早期的宗教组织与心灵探索，到全马知名数字品牌策划，再到今天的 AI 产品架构。
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-7 sm:pl-12 border-l-4 border-ivory-300 ml-3 sm:ml-6 space-y-12 sm:space-y-16">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const isHighlightYear = item.year === "2005" || item.year.includes("NOW");

            return (
              <div key={item.period} className="relative group">
                {/* Timeline node marker - Larger with glow */}
                <div
                  className={`absolute -left-[36px] sm:-left-[56px] top-2 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                    isHighlightYear
                      ? "bg-neon-green border-charcoal-950 ring-4 ring-jade-200 scale-125 shadow-neon-glow"
                      : "bg-ivory-50 border-jade-600 group-hover:scale-125 group-hover:bg-neon-green"
                  }`}
                />

                {/* Timeline Item Content Card */}
                <div
                  className={`rounded-3xl border-2 transition-all duration-300 p-7 sm:p-9 ${
                    isHighlightYear
                      ? "bg-ivory-50 border-jade-500 shadow-card-hover"
                      : "bg-ivory-50/90 hover:bg-ivory-50 border-ivory-300 hover:border-ivory-400 hover:shadow-md"
                  }`}
                >
                  {/* Top Bar: Period & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm sm:text-base font-extrabold px-3.5 py-1.5 rounded-full bg-charcoal-950 text-ivory-50">
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1.5 text-sm sm:text-base text-charcoal-600 font-bold">
                          <MapPin className="w-4 h-4 text-bronze-600" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs sm:text-sm font-bold px-3 py-1 rounded-lg bg-ivory-100 text-charcoal-800 border border-ivory-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Summary - Big & Clear */}
                  <h3 className="font-sans text-2xl sm:text-4xl font-black text-charcoal-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Special Highlight Callout (2005 VISIBER) */}
                  {item.keyHighlight && (
                    <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-bronze-100/90 border-2 border-bronze-300 text-bronze-950 flex items-start gap-4">
                      <Quote className="w-6 h-6 text-bronze-700 shrink-0 mt-1" />
                      <div>
                        <span className="text-xs sm:text-sm uppercase font-mono tracking-widest text-bronze-800 font-black block mb-1">
                          核心认知转折
                        </span>
                        <p className="font-sans text-lg sm:text-2xl font-black text-bronze-950 leading-snug">
                          {item.keyHighlight}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Expandable Details - Larger font */}
                  {item.details && item.details.length > 0 && (
                    <div className="mt-5 pt-5 border-t-2 border-ivory-200">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="text-sm sm:text-base font-bold text-jade-700 hover:text-jade-950 flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? "收起深层复盘" : "展开深度细节"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isExpanded && (
                        <ul className="mt-4 space-y-2.5 text-sm sm:text-lg text-charcoal-700 leading-relaxed list-disc list-inside font-medium">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="marker:text-jade-600">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Tagline - Big Banner */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-ivory-50 border-2 border-ivory-300 shadow-sm">
          <p className="font-sans text-xl sm:text-3xl text-charcoal-900 font-extrabold leading-snug">
            30 年只做一件事：<span className="text-jade-700 underline decoration-neon-green decoration-4">把深奥的智慧翻译为时代的语言</span>。
          </p>
        </div>
      </div>
    </section>
  );
};
