"use client";

import React, { useState } from "react";
import { 
  architectureBlueprint, 
  ArchitectureLayer 
} from "@/data/architecture";
import { 
  Cpu, 
  Database, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Terminal,
  Grid,
  List
} from "lucide-react";

// Mapping icons to each layer
const layerIcons = [
  Layers,      // 01 认知经验提取
  Database,    // 02 私有向量数据库
  Cpu,         // 03 算法排盘与推理
  Sparkles,    // 04 交互体验现代前端
  TrendingUp,  // 05 商业变现漏斗
  ShieldCheck, // 06 企业部署与安全
];

export const PlatformArchitecture: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"detail" | "grid">("detail");

  const currentLayer: ArchitectureLayer = architectureBlueprint[activeLayerIndex];
  const CurrentIcon = layerIcons[activeLayerIndex] || Layers;

  return (
    <section 
      id="architecture" 
      className="py-24 sm:py-32 bg-[#121513] text-[#FAF7F2] relative overflow-hidden border-y border-white/10"
    >
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)`,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-jade-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono tracking-widest text-neon-green uppercase font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>FULL-LIFECYCLE SYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-ivory-50 tracking-tight leading-[1.15]">
            从零构想到平台上线，
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-jade-300 to-bronze-300">
              我为你做的完整工程体系
            </span>
          </h2>

          <p className="text-base sm:text-xl text-charcoal-300 font-normal leading-relaxed pt-2 max-w-3xl mx-auto">
            这不是简单“把资料丢给通用 ChatGPT”。一个真正具备<span className="text-neon-green font-bold">独家知识壁垒</span>、<span className="text-ivory-50 font-bold">毫秒级高精度排盘</span>与<span className="text-bronze-300 font-bold">自动化商业变现</span>的独立 AI 平台，需要跨越 6 大复杂工程层级：
          </p>

          {/* View mode toggle */}
          <div className="pt-2 flex justify-center items-center gap-3">
            <button
              onClick={() => setViewMode("detail")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
                viewMode === "detail"
                  ? "bg-neon-green text-charcoal-950 shadow-neon-glow"
                  : "bg-white/5 text-charcoal-400 hover:text-ivory-50 border border-white/10"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>逐层深度拆解 (推荐演示)</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
                viewMode === "grid"
                  ? "bg-neon-green text-charcoal-950 shadow-neon-glow"
                  : "bg-white/5 text-charcoal-400 hover:text-ivory-50 border border-white/10"
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>全景 6 层矩阵视图</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW MODE 1: DETAIL TABS (DEFAULT & INTERACTIVE) */}
        {/* ============================================================== */}
        {viewMode === "detail" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav: 6 Layer Steps */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-charcoal-400 uppercase tracking-widest px-2 mb-2 flex items-center justify-between">
                <span>6 大核心工程层级</span>
                <span className="text-neon-green font-bold">STEP BY STEP</span>
              </div>

              {architectureBlueprint.map((layer, idx) => {
                const isActive = idx === activeLayerIndex;
                const IconComponent = layerIcons[idx] || Layers;

                return (
                  <button
                    key={layer.step}
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 ${
                      isActive
                        ? "bg-gradient-to-r from-jade-950/90 to-charcoal-900 border-neon-green/80 shadow-neon-glow text-ivory-50 scale-[1.02]"
                        : "bg-charcoal-900/60 hover:bg-charcoal-900 border-white/10 text-charcoal-300 hover:border-white/20"
                    }`}
                  >
                    {/* Left Active Glow Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-neon-green rounded-r-full shadow-neon-glow" />
                    )}

                    {/* Step Number + Icon */}
                    <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                      isActive ? "bg-neon-green text-charcoal-950" : "bg-white/5 text-charcoal-400 group-hover:text-neon-green"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs font-extrabold ${isActive ? "text-neon-green" : "text-bronze-400"}`}>
                          LAYER {layer.step}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-ivory-200">
                          {layer.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-black text-ivory-50 truncate">
                        {layer.phase}
                      </h3>

                      <p className="text-xs text-charcoal-400 truncate mt-0.5 font-mono">
                        {layer.englishPhase}
                      </p>
                    </div>

                    <ArrowRight className={`w-4 h-4 mt-3 flex-shrink-0 transition-transform ${
                      isActive ? "text-neon-green translate-x-1" : "text-charcoal-600 group-hover:text-charcoal-300"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Layer Detailed Deep Dive */}
            <div className="lg:col-span-7 bg-charcoal-900/90 border-2 border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl space-y-8 animate-in fade-in duration-300">
              
              {/* Corner Watermark Badge */}
              <div className="absolute top-4 right-6 font-mono text-6xl font-black text-white/[0.03] select-none pointer-events-none">
                {currentLayer.step}
              </div>

              {/* Title & Core Philosophy */}
              <div className="space-y-3 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-neon-green font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30">
                    LAYER {currentLayer.step} · {currentLayer.badge}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400">
                    {currentLayer.englishPhase}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neon-green/20 text-neon-green border border-neon-green/40">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-ivory-50 tracking-tight">
                    {currentLayer.title}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed font-normal">
                  {currentLayer.subtitle}
                </p>
              </div>

              {/* 3 Concrete Work Modules */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-bronze-300 uppercase tracking-widest font-bold flex items-center gap-2">
                  <span>具体架构模块与研发工作</span>
                  <span className="h-px flex-1 bg-white/10" />
                </h4>

                <div className="space-y-3.5">
                  {currentLayer.workModules.map((module, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-charcoal-950/70 border border-white/10 hover:border-neon-green/40 transition-colors space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-neon-green/20 text-neon-green font-mono text-xs font-bold flex items-center justify-center">
                            {mIdx + 1}
                          </span>
                          <h5 className="font-serif text-base sm:text-lg font-bold text-ivory-100">
                            {module.name}
                          </h5>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed pl-7">
                        {module.description}
                      </p>

                      <div className="pl-7 pt-1 flex flex-wrap gap-1.5">
                        {module.techTags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-white/5 text-neon-green border border-white/10"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complexity Highlights (Why this is hard) */}
              <div className="p-5 rounded-2xl bg-bronze-950/40 border border-bronze-500/30 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-bronze-300 font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-bronze-400" />
                  <span>核心工程复杂度剖析 (为什么普通程序员与小白做不出来)</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal-300">
                  {currentLayer.complexityHighlights.map((hl, hlIdx) => (
                    <li key={hlIdx} className="flex items-start gap-2">
                      <span className="text-bronze-400 mt-1">▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final Concrete Deliverable */}
              <div className="p-4 sm:p-5 rounded-2xl bg-jade-950/50 border border-neon-green/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-neon-green uppercase tracking-widest font-bold block">
                      DELIVERABLE · 本阶段交付物
                    </span>
                    <span className="font-serif text-sm sm:text-base font-black text-ivory-50">
                      {currentLayer.deliverable}
                    </span>
                  </div>
                </div>

                <div className="text-right sm:text-left">
                  <span className="text-xs font-mono text-charcoal-400">
                    完整确权归属老师独家所有
                  </span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* ============================================================== */
          /* VIEW MODE 2: 6-LAYER OVERVIEW GRID (FOR PROJECTOR DISPLAY) */
          /* ============================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {architectureBlueprint.map((layer, idx) => {
              const IconComp = layerIcons[idx] || Layers;
              return (
                <div 
                  key={layer.step}
                  onClick={() => {
                    setActiveLayerIndex(idx);
                    setViewMode("detail");
                  }}
                  className="p-6 rounded-3xl bg-charcoal-900/90 border border-white/10 hover:border-neon-green transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-neon-green bg-neon-green/10 border border-neon-green/30 px-2.5 py-0.5 rounded-full">
                        LAYER {layer.step}
                      </span>
                      <span className="text-xs font-mono text-charcoal-400">
                        {layer.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/5 text-neon-green group-hover:bg-neon-green group-hover:text-charcoal-950 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-black text-ivory-50">
                        {layer.phase}
                      </h3>
                    </div>

                    <p className="text-xs text-charcoal-300 leading-relaxed">
                      {layer.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="space-y-1.5">
                      {layer.workModules.map((m, mIdx) => (
                        <div key={mIdx} className="text-xs sm:text-sm text-charcoal-300 flex items-center gap-1.5 truncate">
                          <span className="text-neon-green text-xs">●</span>
                          <span className="truncate">{m.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-neon-green font-bold group-hover:underline">
                      <span>查看深度研发细节</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner Summary */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-charcoal-950 via-jade-950/60 to-charcoal-950 border border-white/15 text-center space-y-3 shadow-xl">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-ivory-50 tracking-tight">
            “从一个老师的经验脑图，变成一整套拥有独家版权与变现能力的数字商业资产。”
          </p>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-2xl mx-auto font-mono">
            全流程由 Ronnie 操盘落地 · 架构设计、数据工程、算法排盘、UI前端与变现闭环全包交付
          </p>
        </div>

      </div>
    </section>
  );
};
