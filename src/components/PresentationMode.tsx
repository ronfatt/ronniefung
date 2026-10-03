"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  ExternalLink,
  Layers,
  Database,
  Cpu,
  Sparkles,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { teacherTypes } from "@/data/teachers";
import { timelineData } from "@/data/timeline";
import { projectsData } from "@/data/projects";
import { methodSteps } from "@/data/content";
import { architectureBlueprint } from "@/data/architecture";

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal?: (projectId: string) => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState("mingli");

  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  }, [totalSlides]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation listener (Arrow keys, Space, PageUp/Down, Esc)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown" || e.key === "Enter") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        onClose();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose]);

  // Touch gesture swipe handling for mobile / iPad presentation
  useEffect(() => {
    if (!isOpen) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, nextSlide, prevSlide]);

  if (!isOpen) return null;

  const currentTeacher = teacherTypes.find((t) => t.id === selectedTeacherId) || teacherTypes[0];

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal-950 text-[#FAF7F2] select-none flex flex-col justify-between overflow-hidden animate-in fade-in">
      
      {/* Top Floating Presentation HUD */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
        {/* Brand identity badge */}
        <div className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-charcoal-900/90 border border-white/10 backdrop-blur-md shadow-md">
          <span className="font-serif font-black tracking-widest text-xs sm:text-sm text-ivory-50">
            {siteConfig.name}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-[10px] sm:text-xs text-neon-green font-bold">
            KEYNOTE 演讲模式
          </span>
        </div>

        {/* Presentation Slide Navigator & Controls */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 backdrop-blur-md shadow-md">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full hover:bg-white/10 text-ivory-50 transition-colors"
            title="上一张 (←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-mono text-xs sm:text-sm font-bold text-bronze-300 px-2 min-w-[3.5rem] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full hover:bg-white/10 text-ivory-50 transition-colors"
            title="下一张 (→)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-4 bg-white/20 mx-1" />

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-full hover:bg-white/10 text-ivory-50 transition-colors hidden sm:inline-flex"
            title="全屏切换 (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors"
            title="退出演讲模式 (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Line Bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-neon-green to-jade-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* ============================================================== */}
      {/* SLIDE CONTENTS CONTAINER */}
      {/* ============================================================== */}
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12 md:p-16 overflow-y-auto">
        
        {/* SLIDE 0: HERO (我做的，不是算命。) */}
        {currentSlide === 0 && (
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in zoom-in-95 duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest text-neon-green uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                SINCE 1997 · BRIDGING WISDOM TO TOMORROW
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-ivory-50 tracking-tight leading-[1.12]">
                  我做的，
                  <br />
                  <span className="text-charcoal-400">不是算命。</span>
                </h1>

                <p className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-neon-green tracking-tight leading-[1.2]">
                  把老师脑里的经验，
                  <br />
                  变成下一代的系统。
                </p>
              </div>

              <div className="flex items-center gap-3 text-lg sm:text-2xl font-serif font-black text-bronze-300 pt-2">
                <span>玄学</span>
                <span className="text-white/40 font-normal">×</span>
                <span>心灵</span>
                <span className="text-white/40 font-normal">×</span>
                <span>品牌</span>
                <span className="text-white/40 font-normal">×</span>
                <span className="text-neon-green font-sans font-bold">AI</span>
              </div>

              <p className="text-base sm:text-xl text-charcoal-300 leading-relaxed max-w-xl">
                我不是命理师。我的工作，是帮助命理师、风水师、心灵导师等传统文化老师，把多年累积的经验与理论，重新整理成可以持续传承的品牌、内容、系统与 AI 产品。
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full overflow-hidden border-4 border-bronze-400/40 shadow-2xl bg-charcoal-900 group">
                <Image
                  src="/images/hero-circle.jpg"
                  alt="传统智慧 遇见新的时代"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-charcoal-950/80 backdrop-blur-md text-ivory-50 text-xs font-serif font-black tracking-widest whitespace-nowrap border border-white/20">
                  传统智慧 · 遇见新的时代
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 1: 你是哪一种老师？ */}
        {currentSlide === 1 && (
          <div className="max-w-5xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase">
                TARGET COLLABORATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                “你是哪一种老师？”
              </h2>
              <p className="text-sm sm:text-base text-charcoal-400">
                不同的领域，同一个使命。让智慧被更多人看见。
              </p>
            </div>

            {/* 6 Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {teacherTypes.map((t) => {
                const isSelected = t.id === selectedTeacherId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTeacherId(t.id)}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? "bg-neon-green text-charcoal-950 border-neon-green shadow-neon-glow font-black scale-105"
                        : "bg-charcoal-900/80 hover:bg-charcoal-800 text-charcoal-300 border-white/10"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-serif font-black block">
                      {t.name}
                    </span>
                    <span className="text-[10px] font-mono opacity-80 block truncate">
                      {t.tagline.split("·")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Quote Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border-2 border-white/15 text-center space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-bronze-400 font-bold block">
                RONNIE’S POSITIONING FOR 【{currentTeacher.name}】
              </span>
              <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-ivory-50 leading-snug tracking-tight">
                “{currentTeacher.ronnieRole}”
              </blockquote>
              <div className="pt-2 flex flex-wrap justify-center gap-2">
                {currentTeacher.deliverables.map((d, idx) => (
                  <span key={idx} className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-charcoal-300">
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: ABOUT ME (我到底是做什么的？) */}
        {currentSlide === 2 && (
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in zoom-in-95 duration-300">
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/about-ronnie.jpg"
                alt="用创意 连接传统与未来"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg font-black text-ivory-50">
                  用创意 连接传统与未来
                </p>
                <p className="font-mono text-xs text-neon-green font-bold uppercase">
                  Ronnie Fung
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase block mb-1">
                  CORE VALUE
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                  我到底是做什么的？
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-charcoal-300 leading-relaxed font-normal">
                我不是命理师。很多老师有极深的造诣，但问题往往不是“不会”，而是经验只存在脑里、系统无法复制、知识无法数字化。我的工作，就是站在老师、用户与科技之间，把复杂的东西重新整理。
              </p>

              {/* 5 Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { n: "01", t: "品牌定位", d: "找到老师真正的独特价值" },
                  { n: "02", t: "理论整理", d: "把复杂命盘整理成清晰架构" },
                  { n: "03", t: "产品化", d: "转化为课程、咨询、报告与会员" },
                  { n: "04", t: "数字化", d: "做成 Web App、测试工具与互动系统" },
                  { n: "05", t: "AI 化", d: "建立专属私有 AI 知识库与智能分身" },
                ].map((c) => (
                  <div key={c.n} className="p-4 rounded-2xl bg-charcoal-900 border border-white/10 space-y-1">
                    <span className="font-mono text-xs font-bold text-neon-green">{c.n}</span>
                    <h3 className="font-serif text-base sm:text-lg font-black text-ivory-50">{c.t}</h3>
                    <p className="text-xs text-charcoal-400">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: MY JOURNEY (这条路，我走了近 30 年。) */}
        {currentSlide === 3 && (
          <div className="max-w-6xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase">
                30 YEARS OF EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                这条路，我走了近 30 年。
              </h2>
              <p className="text-sm sm:text-base text-charcoal-400">
                不同的阶段，同一个信念 · 让有价值的知识被更多人受益
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {timelineData.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-charcoal-900 border border-white/10 flex flex-col justify-between text-center min-h-[160px] hover:border-neon-green transition-colors">
                  <div>
                    <span className="font-mono text-xs font-bold text-neon-green block mb-1">{item.year}</span>
                    <h3 className="font-serif text-sm font-black text-ivory-50 mb-1 leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-[10px] text-charcoal-400 leading-normal">{item.summary}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-bronze-900/40 border border-bronze-500/40 text-center text-xs sm:text-sm text-bronze-200">
              ⭐ 2005 VISIBER 核心领悟：“这也是我第一次真正学习：如何把抽象理论，变成大众能够理解的产品。”
            </div>
          </div>
        )}

        {/* SLIDE 4: PROJECTS (我不是只谈概念。我已经开始把它们做出来。) */}
        {currentSlide === 4 && (
          <div className="max-w-6xl w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-black text-neon-green tracking-[0.25em] uppercase block mb-1">
                  11 LIVE PROTOTYPES & WEB APPS
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                  我不是只谈概念。我已经开始把它们做出来。
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-400 font-mono">
                已部署 8 款真实线上应用 + 完整 AI 原型
              </p>
            </div>

            {/* 6 Highlight Project Cards with Live Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectsData.slice(0, 6).map((p) => (
                <div key={p.id} className="p-5 rounded-2xl bg-charcoal-900 border border-white/10 flex flex-col justify-between space-y-3 hover:border-neon-green transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono text-bronze-400 font-bold">#{p.number}</span>
                      <span className="text-neon-green font-bold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                        LIVE ONLINE
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-black text-ivory-50 mb-1">{p.name}</h3>
                    <p className="text-xs text-charcoal-400 leading-relaxed line-clamp-2">{p.oneLiner}</p>
                  </div>

                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-neon-green hover:text-charcoal-950 text-xs font-bold transition-all text-ivory-50"
                  >
                    <span>体验真实 App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 5: FULL-LIFECYCLE PLATFORM ARCHITECTURE */}
        {currentSlide === 5 && (
          <div className="max-w-6xl w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-black text-neon-green tracking-[0.25em] uppercase">
                FULL-LIFECYCLE SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                从零构想到平台上线，我为你做的完整工程体系
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-400 max-w-2xl mx-auto">
                这绝非“把资料丢给通用 ChatGPT”。真正具备商业壁垒的独立 AI 平台，需要跨越 6 大复杂工程层级：
              </p>
            </div>

            {/* 6 Layers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {architectureBlueprint.map((layer, idx) => {
                const icons = [Layers, Database, Cpu, Sparkles, TrendingUp, ShieldCheck];
                const LayerIcon = icons[idx] || Layers;
                return (
                  <div 
                    key={layer.step}
                    className="p-4 sm:p-5 rounded-2xl bg-charcoal-900/90 border border-white/10 flex flex-col justify-between space-y-3 hover:border-neon-green transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-neon-green bg-neon-green/10 border border-neon-green/30 px-2 py-0.5 rounded-full">
                          LAYER {layer.step}
                        </span>
                        <span className="text-[10px] font-mono text-charcoal-400">
                          {layer.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-white/5 text-neon-green">
                          <LayerIcon className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-black text-ivory-50 truncate">
                          {layer.phase}
                        </h3>
                      </div>

                      <p className="text-xs text-charcoal-300 leading-snug">
                        {layer.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-bronze-300 block uppercase truncate">
                        交付：{layer.deliverable}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-neon-green/10 border border-neon-green/30 text-center">
              <p className="font-serif text-base sm:text-lg font-black text-ivory-100">
                “从老师经验逆向工程，到私有向量防幻觉、确定性算法排盘、全端体验与自动化变现全包落地。”
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 6: MY METHOD (传统知识进入 AI，不是把资料丢进 ChatGPT。) */}
        {currentSlide === 6 && (
          <div className="max-w-6xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase">
                AI ENGINEERING METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                传统知识进入 AI，不是把资料丢进 ChatGPT。
              </h2>
              <p className="text-sm sm:text-base text-charcoal-400 max-w-2xl mx-auto">
                真正有价值的 AI，必须先理解老师“为什么这样判断”。不是复制一堆术语，而是把老师几十年的经验，变成可以执行的逻辑。
              </p>
            </div>

            {/* 9 Steps Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
              {methodSteps.map((step, idx) => (
                <div key={step.step} className="p-3.5 rounded-2xl bg-charcoal-900 border border-white/10 flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-[10px] font-mono text-neon-green font-bold">0{idx + 1}</span>
                  <h3 className="font-serif text-xs sm:text-sm font-black text-ivory-50">{step.name}</h3>
                  <p className="text-[9px] text-charcoal-400 font-mono truncate w-full">{step.sub}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-charcoal-900/90 border border-white/10 text-center">
              <p className="font-mono text-xs sm:text-sm text-bronze-300 tracking-widest uppercase font-bold">
                TECHNOLOGY SERVES WISDOM NOT REPLACES IT · 科技服务智慧而非取代智慧
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 7: MY PHILOSOPHY (未来真正有价值的，不是 AI 会不会算命。) */}
        {currentSlide === 7 && (
          <div className="max-w-5xl w-full space-y-10 text-center animate-in fade-in zoom-in-95 duration-300">
            <span className="text-xs font-mono font-black text-neon-green tracking-[0.25em] uppercase">
              PHILOSOPHICAL VISION
            </span>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-6xl font-black text-charcoal-400 tracking-tight leading-tight">
                未来真正有价值的，
                <br />
                不是 AI 会不会算命。
              </h2>

              <div className="h-0.5 w-24 bg-neon-green mx-auto" />

              <p className="font-serif text-3xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ivory-50 via-neon-green to-jade-200 tracking-tight leading-tight">
                而是：
                <br />
                谁能把几十年的经验，
                <br />
                变成 AI 学得懂的知识。
              </p>
            </div>

            <div className="max-w-xl mx-auto p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-sm sm:text-base">
              <p className="font-bold text-ivory-100">老师不会被 AI 取代。</p>
              <p className="text-charcoal-400">但不会使用 AI 的知识，可能会慢慢消失。</p>
            </div>
          </div>
        )}

        {/* SLIDE 8: LET'S WORK TOGETHER (我正在找这样的老师合作。) */}
        {currentSlide === 8 && (
          <div className="max-w-5xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-black text-bronze-400 tracking-[0.25em] uppercase">
                CO-CREATION PARTNERS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ivory-50 tracking-tight">
                我正在找这样的老师合作。
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                "有 10-30 年经验，但知识还没系统化",
                "有自己的理论，但不知道怎么做成产品",
                "想做自己的 App，但不知道从哪里开始",
                "想建立 AI 老师，让学生随时使用",
                "不只是靠一对一咨询，想把经验留下来",
              ].map((text, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-charcoal-900 border border-white/10 flex flex-col justify-between text-center min-h-[140px]">
                  <span className="font-mono text-xs font-bold text-neon-green">0{idx + 1}</span>
                  <p className="font-serif text-sm font-bold text-ivory-100 leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-neon-green/10 border-2 border-neon-green/40 text-center space-y-2">
              <p className="font-serif text-2xl sm:text-4xl font-black text-ivory-50">
                从一个老师的经验，变成一整套数字资产。
              </p>
              <p className="text-xs sm:text-sm text-charcoal-300">
                不再受物理时间限制，让你的智慧拥有复利效应。
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 9: CLOSING (如果你有一套做了 10-30 年的方法...) */}
        {currentSlide === 9 && (
          <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <span className="text-xs font-mono font-black text-neon-green tracking-[0.25em] uppercase">
              CALL TO ACTION
            </span>

            <div className="space-y-4 font-serif">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-ivory-50 leading-tight">
                如果你有一套
                <br />
                做了 10 年、20 年、30 年的方法，
              </h2>
              <p className="text-2xl sm:text-4xl font-bold text-charcoal-400">
                不要只留在自己的脑里。
              </p>
              <p className="text-3xl sm:text-5xl md:text-6xl font-black text-neon-green">
                我们可以把它变成下一代的系统。
              </p>
            </div>

            <div className="pt-2">
              <p className="font-serif text-3xl font-black italic text-bronze-300">
                Ronnie Fung
              </p>
              <p className="text-xs font-mono text-charcoal-400 uppercase tracking-widest pt-1">
                Brand Strategist · Knowledge Architect · AI Product Planner
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-lg transition-transform active:scale-95"
              >
                WhatsApp 与我联系 ({siteConfig.contact.whatsapp})
              </a>

              <button
                onClick={onClose}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-ivory-50 font-bold text-sm sm:text-base border border-white/20 transition-colors"
              >
                浏览完整网页长图
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Keyboard Hint Bar */}
      <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-charcoal-400 bg-charcoal-950/80 backdrop-blur-md">
        <div className="hidden sm:flex items-center gap-4">
          <span>快捷键：[← 上一张] [→ 下一张 / 空格] [F 全屏] [Esc 退出]</span>
        </div>
        <div className="sm:hidden text-center w-full">
          <span>左右滑动屏幕即可切换幻灯片</span>
        </div>
        <div className="hidden sm:block text-neon-green font-bold">
          投屏模式：已优化投影仪与大屏高对比度
        </div>
      </div>

    </div>
  );
};
