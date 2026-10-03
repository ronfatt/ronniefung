"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowRight, MessageCircle, Presentation } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPresentation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5] py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo: RONNIE FUNG / BRIDGING WISDOM TO TOMORROW */}
        <a href="#" className="group flex flex-col">
          <span className="font-serif font-black tracking-[0.2em] text-lg sm:text-xl text-charcoal-950 group-hover:text-jade-700 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-charcoal-500 font-bold uppercase">
            {siteConfig.subName}
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm sm:text-base text-charcoal-700 font-bold">
          {siteConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-charcoal-950 transition-colors py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal-950 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* PPT Presentation Mode Trigger Button */}
          {onOpenPresentation && (
            <button
              onClick={onOpenPresentation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider bg-jade-100 hover:bg-jade-200 text-jade-950 border border-jade-300 transition-all duration-200 shadow-xs active:scale-95"
              title="按 P 键或点击开启幻灯片演示模式"
            >
              <Presentation className="w-3.5 h-3.5 text-jade-800" />
              <span>PPT 演讲模式</span>
            </button>
          )}

          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider bg-charcoal-950 text-[#F5F2EB] hover:bg-jade-900 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Let’s Build</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenPresentation && (
            <button
              onClick={onOpenPresentation}
              className="p-2 rounded-xl bg-jade-100 text-jade-950 border border-jade-300 text-xs font-bold flex items-center gap-1"
              title="PPT 演讲模式"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>PPT</span>
            </button>
          )}

          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded-full bg-charcoal-950 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-neon-green" />
            <span>聊聊</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#EFE9DF] text-charcoal-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E2D5] px-6 pt-4 pb-7 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-charcoal-900 hover:text-jade-700 py-3 border-b border-[#EFE9DF] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-charcoal-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            {onOpenPresentation && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPresentation();
                }}
                className="w-full py-3 rounded-xl bg-jade-800 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Presentation className="w-4 h-4 text-neon-green" />
                <span>开启 PPT 幻灯片全屏演讲模式</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-charcoal-950 text-[#F5F2EB] text-sm font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>与 Ronnie 开启探讨 (Let’s Build)</span>
              <ArrowRight className="w-4 h-4 text-neon-green" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
