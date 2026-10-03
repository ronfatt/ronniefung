"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectItem } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Cpu, ArrowRight } from "lucide-react";

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
    <section id="projects" className="py-20 sm:py-32 bg-ivory-100/60 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header - Big, Confident */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-bronze-700 font-extrabold uppercase mb-4">
            <span>SECTION 04</span>
            <span>/</span>
            <span>PROTOTYPES & WEB APPS</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-black text-charcoal-950 tracking-tight leading-tight mb-5">
            我不是只谈概念。
            <br />
            <span className="text-jade-700 underline decoration-neon-green decoration-4 underline-offset-6">
              我已经开始把它们做出来。
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal-800 leading-relaxed font-normal">
            真正能打动现代学员与年轻用户的，不是玄之又玄的说教，而是看得见、点得开、能交互的高颜值数字化系统。
            以下为目前已完成架构与界面策划的 <span className="font-bold text-charcoal-950 underline decoration-bronze-500">11 款 Web App / Prototype</span>：
          </p>
        </div>

        {/* Category Tabs - Large, Modern Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-12 pb-2">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm sm:text-base font-extrabold px-5 py-3 rounded-2xl transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-charcoal-950 text-ivory-50 shadow-md ring-2 ring-neon-green"
                    : "bg-ivory-50 hover:bg-ivory-200 text-charcoal-800 border-2 border-ivory-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 11 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDemo={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Showcase Bottom Note - Big Banner */}
        <div className="mt-16 p-7 sm:p-9 rounded-3xl bg-ivory-50 border-2 border-ivory-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-4">
            <Cpu className="w-7 h-7 text-neon-green shrink-0 fill-jade-900" />
            <p className="text-base sm:text-xl text-charcoal-800 leading-snug">
              <span className="font-black text-charcoal-950">需要为你定制专属逻辑？</span>
              所有系统均支持将前端风格、断语规则、排盘流派全面定制为老师独家知识资产。
            </p>
          </div>
          <a
            href="#method"
            className="text-base sm:text-lg font-black text-jade-800 hover:text-jade-950 flex items-center gap-1.5 whitespace-nowrap group"
          >
            <span>了解如何把经验做成 App</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
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
