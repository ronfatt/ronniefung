"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectItem } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";


export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter((p) => {
        if (selectedCategory === "numerology") return p.categorySlug === "numerology";
        if (selectedCategory === "mingli") return p.categorySlug === "mingli";
        if (selectedCategory === "fengshui") return p.categorySlug === "fengshui";
        if (selectedCategory === "healing") return p.categorySlug === "healing";
        if (selectedCategory === "ai-brand") return p.categorySlug === "ai-brand";
        return true;
      });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#141715] text-[#FAF7F2] relative overflow-hidden">
      {/* Background delicate subtle grid */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Top Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase block mb-1">
              PROJECTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#FAF7F2] tracking-tight leading-tight mb-2">
              我不是只谈概念。
              <br className="hidden sm:inline" />
              我已经开始把它们做出来。
            </h2>
            <p className="text-sm sm:text-base text-charcoal-400 font-medium">
              11 个玄学 · 心灵 · 命理相关 Web App / Prototype
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-neon-green text-charcoal-950 font-black shadow-sm"
                      : "bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-300 border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 11 Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDemo={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
