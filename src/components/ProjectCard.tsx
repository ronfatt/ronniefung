"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { 
  ArrowUpRight, 
  Play
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
        {/* Top category & number */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm font-black text-bronze-700 bg-ivory-200 px-2.5 py-1 rounded-lg">
              #{project.number}
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-jade-50 text-jade-900 border border-jade-200">
              {project.category}
            </span>
          </div>

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-ivory-200 text-charcoal-600">
            {project.status}
          </span>
        </div>

        {/* Project Thumbnail Placeholder / Abstract Graphic - Modern Tech Aesthetic */}
        <div className="relative h-32 sm:h-36 rounded-2xl bg-gradient-to-br from-ivory-100 to-ivory-200 border border-ivory-300 p-5 mb-5 flex flex-col justify-between overflow-hidden group-hover:border-jade-400 transition-colors shadow-inner">
          <div className="absolute inset-0 bg-digital-grid opacity-35 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-black text-charcoal-500 uppercase tracking-widest">
              AI ENGINE PROTOTYPE
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
          </div>

          <div className="relative z-10">
            <p className="font-sans text-xl sm:text-2xl font-black text-charcoal-950 group-hover:text-jade-700 transition-colors">
              {project.name}
            </p>
            <p className="text-xs sm:text-sm font-mono text-charcoal-500 font-medium">
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

      {/* Card Action Button: [打开 Demo] - Big, Tactile */}
      <div className="pt-4 border-t-2 border-ivory-200 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDemo(project)}
          className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-sm sm:text-base font-extrabold tracking-wide transition-all duration-200 shadow-sm active:scale-95 group/btn"
        >
          <Play className="w-4 h-4 text-neon-green fill-neon-green" />
          <span>打开 Demo</span>
          <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover/btn:text-ivory-50 transition-colors" />
        </button>
      </div>
    </div>
  );
};
