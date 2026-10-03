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
import { PossibleProducts } from "@/components/PossibleProducts";
import { PersonalPhilosophy } from "@/components/PersonalPhilosophy";
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
    <main className="min-h-screen bg-ivory-50 text-charcoal-900 selection:bg-jade-700 selection:text-ivory-50 relative">
      {/* Top Floating Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* SECTION 1: HERO */}
      <Hero onOpenDemo={handleScrollToProjects} />

      {/* SPECIAL INTERACTION: 你是哪一种老师？ */}
      <TeacherSelector onSelectTeacherForChat={handleOpenContactWithTopic} />

      {/* SECTION 2: WHO I AM (我到底是做什么的？) */}
      <WhoIAm />

      {/* SECTION 3: 30-YEAR JOURNEY TIMELINE */}
      <Timeline />

      {/* SECTION 4: 11 PROTOTYPES & WEB APPS SHOWCASE */}
      <ProjectShowcase />

      {/* SECTION 5: MY METHOD (传统知识进入 AI，不是把资料丢进 ChatGPT) */}
      <MethodFlow />

      {/* SECTION 6: BIG STATEMENT (Full-screen Dark Section) */}
      <BigStatement />

      {/* SECTION 7: TARGET PARTNERS (我正在找这样的老师合作) */}
      <TargetPartners onPartnerSelect={handleOpenContactWithTopic} />

      {/* SECTION 8: POSSIBLE PRODUCTS (我们可以一起做什么？) */}
      <PossibleProducts />

      {/* SECTION 9: PERSONAL PHILOSOPHY (我对玄学的看法) */}
      <PersonalPhilosophy />

      {/* SECTION 10: CLOSING & CALL TO ACTION */}
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
