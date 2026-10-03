"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/data/projects";
import { 
  X, 
  ExternalLink, 
  Check, 
  Play, 
  RotateCcw,
  Bot,
  Zap
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"demo" | "arch">("demo");
  const [simulatedRunning, setSimulatedRunning] = useState(false);

  if (!project) return null;

  const handleRunSimulation = () => {
    setSimulatedRunning(true);
    setTimeout(() => {
      setSimulatedRunning(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="bg-ivory-50 rounded-3xl border-2 border-ivory-300 shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b-2 border-ivory-200 flex items-start justify-between bg-ivory-100">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-mono text-sm font-black text-bronze-800 px-2.5 py-1 rounded-md bg-bronze-200/80">
                PROTOTYPE #{project.number}
              </span>
              <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-jade-100 text-jade-900">
                {project.category}
              </span>
              <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md bg-ivory-200 text-charcoal-700">
                {project.status}
              </span>
            </div>
            <h3 className="font-sans text-2xl sm:text-4xl font-black text-charcoal-950">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-charcoal-500 font-bold mt-1">
              {project.englishName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-ivory-200 text-charcoal-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher - Big & Clear */}
        <div className="flex border-b-2 border-ivory-200 px-6 sm:px-7 bg-ivory-50">
          <button
            onClick={() => setActiveTab("demo")}
            className={`py-4 text-sm sm:text-base font-extrabold border-b-4 mr-8 transition-colors ${
              activeTab === "demo"
                ? "border-neon-green text-charcoal-950"
                : "border-transparent text-charcoal-500 hover:text-charcoal-900"
            }`}
          >
            实时交互演示 (Live Simulation)
          </button>
          <button
            onClick={() => setActiveTab("arch")}
            className={`py-4 text-sm sm:text-base font-extrabold border-b-4 transition-colors ${
              activeTab === "arch"
                ? "border-neon-green text-charcoal-950"
                : "border-transparent text-charcoal-500 hover:text-charcoal-900"
            }`}
          >
            底层架构与逻辑 (AI Architecture)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {activeTab === "demo" ? (
            <div className="space-y-5">
              <div className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal">
                {project.description}
              </div>

              {/* Live Interactive Simulation Box */}
              <div className="rounded-2xl border-2 border-ivory-300 bg-ivory-100 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono text-charcoal-600 font-extrabold uppercase tracking-wider flex items-center gap-2">
                    <Bot className="w-4 h-4 text-jade-700" />
                    模拟输入演示
                  </span>
                  <button
                    onClick={handleRunSimulation}
                    disabled={simulatedRunning}
                    className="text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl bg-charcoal-950 text-ivory-50 hover:bg-jade-700 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    {simulatedRunning ? (
                      <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 text-neon-green fill-neon-green" />
                    )}
                    <span>{simulatedRunning ? "正在执行逻辑..." : "重新运行"}</span>
                  </button>
                </div>

                {/* Sample input */}
                <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-300 text-sm sm:text-base font-mono text-charcoal-900">
                  <span className="text-charcoal-500 block text-xs mb-1 font-sans font-bold">
                    {project.mockData.inputLabel}：
                  </span>
                  {project.mockData.sampleInput}
                </div>

                {/* Output box */}
                <div className="p-5 rounded-2xl bg-charcoal-950 text-ivory-50 space-y-3 relative overflow-hidden shadow-md">
                  <div className="flex items-center justify-between border-b border-charcoal-800 pb-3 text-xs sm:text-sm font-mono text-neon-green font-bold">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      AI 逻辑判定结果输出
                    </span>
                    <span className="text-charcoal-400 font-normal">耗时 0.42s</span>
                  </div>

                  {simulatedRunning ? (
                    <div className="py-8 flex flex-col items-center justify-center gap-3 text-sm text-jade-300">
                      <div className="w-6 h-6 border-3 border-neon-green border-t-transparent rounded-full animate-spin" />
                      <span className="font-bold">正在调用老师规则算法与知识库...</span>
                    </div>
                  ) : (
                    <div className="space-y-3 pt-1">
                      {project.mockData.outputHighlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-sm sm:text-base">
                          <Check className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                          <span className="text-ivory-100 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-ivory-100 border-2 border-ivory-300 space-y-3">
                <h4 className="text-xs sm:text-sm font-mono font-black text-bronze-800 uppercase tracking-wider">
                  核心 AI 算力与工程逻辑
                </h4>
                <p className="text-base sm:text-lg font-bold text-charcoal-950">
                  {project.mockData.aiLogic}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs sm:text-sm font-bold px-3 py-1 rounded-lg bg-ivory-50 border border-ivory-300 text-charcoal-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-jade-50 border-2 border-jade-300 text-sm sm:text-base text-jade-950 leading-relaxed font-medium">
                <span className="font-black block mb-1 text-base sm:text-lg">为老师带来的商业价值：</span>
                由系统自动完成 80% 的初阶信息排盘、格式化诊断与高频解答，让老师能把精力聚焦在最后 20% 高客单成交与高维指点。
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Link */}
        <div className="p-6 sm:p-7 border-t-2 border-ivory-200 bg-ivory-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-charcoal-600 font-medium">
            * 独立环境部署，支持绑定老师自己的独立域名与品牌 Logo
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-sm sm:text-base font-extrabold tracking-wide transition-all shadow-md group"
            >
              <span>立即打开真实 App ({project.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')})</span>
              <ExternalLink className="w-4 h-4 text-neon-green" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
