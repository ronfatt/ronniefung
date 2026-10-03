"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
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
          ? "bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-ivory-300/80 py-4"
          : "bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Younger Badge */}
        <a href="#" className="group flex items-center gap-3.5">
          <div className="flex flex-col">
            <span className="font-sans font-black tracking-wider text-xl sm:text-2xl text-charcoal-950 group-hover:text-jade-600 transition-colors">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="text-xs sm:text-sm tracking-wide text-charcoal-500 font-semibold">
              传统智慧 × 品牌 × AI
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-jade-50 text-jade-700 border border-jade-200">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Since {siteConfig.since}
          </span>
        </a>

        {/* Desktop Navigation - Big & Clear */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base text-charcoal-700 font-semibold">
          {siteConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-jade-600 transition-colors py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jade-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button - Fresh & Energetic */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide bg-charcoal-950 text-ivory-50 hover:bg-jade-700 hover:shadow-neon-glow transition-all duration-300 active:scale-95"
          >
            <span>Let’s Build</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger - Big touch targets */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onOpenContact}
            className="px-3.5 py-2 rounded-full bg-charcoal-900 text-ivory-50 text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-neon-green" />
            <span>聊聊</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-ivory-200 text-charcoal-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Large, Readable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50 border-b border-ivory-300 px-6 pt-5 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-charcoal-900 hover:text-jade-600 py-3 border-b border-ivory-200 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-charcoal-400" />
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-2xl bg-charcoal-950 text-ivory-50 text-base font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>与 Ronnie 开启探讨 (Let’s Build)</span>
              <ArrowUpRight className="w-5 h-5 text-neon-green" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
