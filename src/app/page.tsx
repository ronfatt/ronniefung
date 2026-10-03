"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TeacherSelector } from "@/components/TeacherSelector";
import { WhoIAm } from "@/components/WhoIAm";
import { Timeline } from "@/components/Timeline";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { MethodFlow } from "@/components/MethodFlow";
import { BigStatement } from "@/components/BigStatement";
import { TargetPartners } from "@/components/TargetPartners";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("传统经验系统化与 AI 产品定制");

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
      {/* Top Floating Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

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

      {/* SECTION 6: MY METHOD (传统知识进入 AI，不是把资料丢进 ChatGPT。) */}
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

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialTopic={selectedTopic}
      />
    </main>
  );
}
