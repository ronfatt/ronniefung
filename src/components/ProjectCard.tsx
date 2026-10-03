"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { 
  Play,
  ExternalLink,
  Cpu
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDemo: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDemo }) => {
  return (
    <div className="group rounded-3xl bg-ivory-50 border-2 border-ivory-300 hover:border-jade-500 p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between relative overflow-hidden">
      {/* Top indicator bar */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.accentColor} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div>
        {/* Top category & live status */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm font-black text-bronze-800 bg-ivory-200 px-2.5 py-1 rounded-lg">
              #{project.number}
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-jade-50 text-jade-900 border border-jade-200">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-jade-100/80 text-jade-900 text-xs font-mono font-bold border border-jade-300">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span>LIVE 线上作品</span>
          </div>
        </div>

        {/* Project Thumbnail Placeholder / Abstract Graphic - Modern Tech Aesthetic */}
        <div 
          onClick={() => onOpenDemo(project)}
          className="cursor-pointer relative h-32 sm:h-36 rounded-2xl bg-gradient-to-br from-ivory-100 to-ivory-200 border border-ivory-300 p-5 mb-5 flex flex-col justify-between overflow-hidden group-hover:border-jade-400 transition-colors shadow-inner"
        >
          <div className="absolute inset-0 bg-digital-grid opacity-35 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-black text-charcoal-500 uppercase tracking-widest flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-jade-600" />
              AI ENGINE PROTOTYPE
            </span>
            <span className="text-[11px] font-bold text-bronze-800 bg-ivory-50 px-2 py-0.5 rounded border border-ivory-300">
              点击看架构 ↗
            </span>
          </div>

          <div className="relative z-10">
            <p className="font-sans text-xl sm:text-2xl font-black text-charcoal-950 group-hover:text-jade-700 transition-colors">
              {project.name}
            </p>
            <p className="text-xs sm:text-sm font-mono text-charcoal-500 font-bold truncate">
              {project.englishName}
            </p>
          </div>
        </div>

        {/* One-liner Explanation - Big & Clear */}
        <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal mb-5 min-h-[3rem]">
          {project.oneLiner}
        </p>

        {/* Feature tags - Larger Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-ivory-100 text-charcoal-700 border border-ivory-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-bold px-2 py-1 rounded text-charcoal-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Dual Action Buttons: [直接打开线上 Demo ↗] & [模拟分析] */}
      <div className="pt-4 border-t-2 border-ivory-200 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onOpenDemo(project)}
          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-ivory-100 hover:bg-ivory-200 border border-ivory-300 text-charcoal-900 text-xs sm:text-sm font-bold tracking-wide transition-all active:scale-95"
        >
          <Play className="w-3.5 h-3.5 text-jade-700 fill-jade-700" />
          <span>演示逻辑</span>
        </button>

        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-xs sm:text-sm font-black tracking-wide transition-all shadow-sm active:scale-95 group/link"
        >
          <span>进入真实 App</span>
          <ExternalLink className="w-3.5 h-3.5 text-neon-green group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
