"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TeacherSelector } from "@/components/TeacherSelector";
import { WhoIAm } from "@/components/WhoIAm";
import { Timeline } from "@/components/Timeline";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { WhyNotChatGPT } from "@/components/WhyNotChatGPT";
import { PlatformArchitecture } from "@/components/PlatformArchitecture";
import { MethodFlow } from "@/components/MethodFlow";
import { BigStatement } from "@/components/BigStatement";
import { TargetPartners } from "@/components/TargetPartners";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ContactModal } from "@/components/ContactModal";
import { PresentationMode } from "@/components/PresentationMode";
import { Presentation } from "lucide-react";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [presentationModeOpen, setPresentationModeOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("传统经验系统化与 AI 产品定制");

  // Global 'P' shortcut to enter presentation keynote mode
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key.toLowerCase() === "p" && !presentationModeOpen && !contactModalOpen) {
        e.preventDefault();
        setPresentationModeOpen(true);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [presentationModeOpen, contactModalOpen]);

  const handleOpenContactWithTopic = (topic: string) => {
    setSelectedTopic(topic);
    setContactModalOpen(true);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-charcoal-900 selection:bg-jade-800 selection:text-white relative">
      {/* Top Floating Navigation with Presentation Trigger */}
      <Navbar 
        onOpenContact={() => setContactModalOpen(true)}
        onOpenPresentation={() => setPresentationModeOpen(true)}
      />

      {/* SECTION 1: HERO */}
      <Hero onOpenDemo={handleScrollToProjects} />

      {/* SECTION 2: SPECIAL INTERACTION (你是哪一种老师？) */}
      <TeacherSelector onSelectTeacherForChat={handleOpenContactWithTopic} />

      {/* SECTION 3: ABOUT ME (我到底是做什么的？) */}
      <WhoIAm />

      {/* SECTION 4: MY JOURNEY (这条路，我走了近 30 年。) */}
      <Timeline />

      {/* SECTION 5: PROJECTS (我不是只谈概念。我已经开始把它们做出来。) */}
      <ProjectShowcase />

      {/* SECTION 6: WHY NOT CHATGPT (为什么不是直接用 ChatGPT？) */}
      <WhyNotChatGPT />

      {/* SECTION 7: PLATFORM ARCHITECTURE (从零构想到平台上线，我为你做的完整工程体系) */}
      <PlatformArchitecture />

      {/* SECTION 7: MY METHOD (传统知识进入 AI，不是把资料丢进 ChatGPT。) */}
      <MethodFlow />

      {/* SECTION 7: MY PHILOSOPHY (未来真正有价值的，不是 AI 会不会算命。) */}
      <BigStatement />

      {/* SECTION 8: LET'S WORK TOGETHER (我正在找这样的老师合作。) */}
      <TargetPartners onPartnerSelect={handleOpenContactWithTopic} />

      {/* SECTION 9: FOOTER / CLOSING */}
      <ClosingCTA
        onOpenContact={() => setContactModalOpen(true)}
        onOpenDemo={handleScrollToProjects}
      />

      {/* Floating Bottom-Right Presentation Launcher Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setPresentationModeOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-charcoal-950 text-ivory-50 hover:bg-jade-900 transition-all duration-300 shadow-xl hover:shadow-neon-glow border border-white/10 active:scale-95 text-xs sm:text-sm font-extrabold"
          title="点击或按键盘 P 键开启全屏幻灯片演讲模式"
        >
          <Presentation className="w-4 h-4 text-neon-green" />
          <span>PPT 演讲模式</span>
          <span className="hidden sm:inline font-mono text-[10px] text-bronze-300 bg-white/10 px-1.5 py-0.5 rounded">
            P
          </span>
        </button>
      </div>

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialTopic={selectedTopic}
      />

      {/* Full-screen PowerPoint Keynote Slideshow Mode */}
      <PresentationMode
        isOpen={presentationModeOpen}
        onClose={() => setPresentationModeOpen(false)}
      />
    </main>
  );
}
