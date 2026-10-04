"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Sparkles, 
  CalendarCheck, 
  Layers, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Workflow
} from "lucide-react";
import { bmsProposalData } from "@/data/bmsProposal";

interface BMSProposalProps {
  onOpenContact?: (topic: string) => void;
}

export const BMSProposal: React.FC<BMSProposalProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<"pillars" | "roles" | "role" | "roadmap">("pillars");

  const pillarIcons = [Compass, Sparkles, CalendarCheck, Layers];

  return (
    <section id="bms-proposal" className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-charcoal-200/60 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-jade-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jade-800/10 border border-jade-800/20 text-jade-800 text-xs font-mono font-bold tracking-widest uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>{bmsProposalData.header.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
            {bmsProposalData.header.title}
          </h2>

          <p className="font-serif text-xl sm:text-2xl font-bold text-jade-800 leading-snug">
            {bmsProposalData.header.coreStatement}
          </p>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
            {bmsProposalData.header.summary}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-charcoal-100 border border-charcoal-200/80 shadow-inner">
            {[
              { id: "pillars", label: "01 · 四大核心支柱" },
              { id: "roles", label: "02 · 三端商业架构" },
              { id: "role", label: "03 · 我的规划角色" },
              { id: "roadmap", label: "04 · 三阶段落地路径" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-black transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-jade-900 shadow-md scale-100"
                    : "text-charcoal-500 hover:text-charcoal-900 hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content Area */}
        <div className="mt-10">
          {/* TAB 1: 4 Core Pillars */}
          {activeTab === "pillars" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
              {bmsProposalData.pillars.map((item, idx) => {
                const IconComponent = pillarIcons[idx] || Compass;
                return (
                  <div
                    key={item.id}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-charcoal-200/80 shadow-card hover:shadow-xl hover:border-jade-600 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-jade-800 bg-jade-50 px-2.5 py-1 rounded-full border border-jade-200">
                          PILLAR {item.id}
                        </span>
                        <div className="p-2 rounded-xl bg-charcoal-50 text-jade-800 group-hover:bg-jade-800 group-hover:text-white transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-mono text-bronze-600 font-bold uppercase tracking-wider block">
                          {item.tag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-charcoal-900 group-hover:text-jade-900 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-charcoal-100 flex items-center gap-1.5 text-xs font-bold text-jade-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-jade-600" />
                      <span>{item.metric}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: Three-Tier Roles Architecture */}
          {activeTab === "roles" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {bmsProposalData.roles.map((r, idx) => {
                const roleIcons = [Users, GraduationCap, ShieldCheck];
                const RoleIcon = roleIcons[idx] || Users;
                return (
                  <div
                    key={r.role}
                    className="p-7 rounded-3xl bg-white border border-charcoal-200/80 shadow-card hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-black text-charcoal-400 uppercase tracking-widest">
                          {r.role}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-jade-50 text-jade-800 border border-jade-200 font-mono text-xs font-bold">
                          {r.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-charcoal-900 text-ivory-50">
                          <RoleIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-black text-charcoal-900">
                          {r.title}
                        </h3>
                      </div>

                      <ul className="space-y-2.5 pt-2">
                        {r.items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-600 font-sans">
                            <span className="text-jade-700 font-bold mt-0.5">✦</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-2xl bg-charcoal-50 text-center text-xs font-mono text-charcoal-500 font-medium">
                      三端数据打通 · 实时协同调度
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: Ronnie's Planning Role */}
          {activeTab === "role" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {bmsProposalData.ronnieRole.map((item) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-sm hover:border-jade-700 transition-all space-y-2 text-center"
                  >
                    <span className="font-mono text-xs font-black text-jade-800 bg-jade-50 px-2 py-0.5 rounded-full">
                      STEP {item.step}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-black text-charcoal-900 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-charcoal-500 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 text-ivory-50 text-center space-y-2 shadow-xl">
                <Workflow className="w-8 h-8 mx-auto text-jade-400 mb-1" />
                <p className="font-serif text-lg sm:text-xl font-bold text-ivory-100 max-w-3xl mx-auto leading-relaxed">
                  “从品牌如何被理解，到用户如何进入、体验、预约，再到导师与团队如何管理服务，我将这些环节整合为一套可以逐步落地的平台方案。”
                </p>
                <p className="text-xs font-mono text-charcoal-400 uppercase tracking-widest">
                  Brand Strategist · Knowledge Architect · System Planner
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Phased Roadmap */}
          {activeTab === "roadmap" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {bmsProposalData.roadmap.map((ph, idx) => (
                <div
                  key={ph.phase}
                  className="p-7 rounded-3xl bg-white border-2 border-charcoal-200/80 hover:border-jade-700 shadow-card hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-black text-bronze-600 tracking-widest uppercase">
                      {ph.phase}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-black text-charcoal-900">
                      {ph.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                      {ph.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs font-bold text-jade-800">
                    <span>落地实施周期</span>
                    <span>MILESTONE 0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Callout & Action Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-jade-950 via-charcoal-900 to-charcoal-950 text-ivory-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-jade-400 uppercase tracking-widest block">
              STATUS: CONCEPT PROPOSAL · 概念提案
            </span>
            <p className="font-serif text-base sm:text-lg font-bold text-ivory-100">
              功能与实施范围待与 BMS 团队共同确认，准备好开启落地沟通了吗？
            </p>
          </div>

          <button
            onClick={() => onOpenContact?.("BMS 身心灵导师聚合平台概念落地与合作")}
            className="px-8 py-4 rounded-full bg-jade-500 hover:bg-jade-400 text-charcoal-950 font-serif font-black text-sm transition-all shadow-lg active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            <span>探讨 BMS 落地细节</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
