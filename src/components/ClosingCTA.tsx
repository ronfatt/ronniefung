"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  MessageCircle, 
  QrCode 
} from "lucide-react";

interface ClosingCTAProps {
  onOpenContact?: () => void;
  onOpenDemo?: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenContact }) => {
  const [copiedWechat, setCopiedWechat] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(siteConfig.contact.wechat);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <footer id="closing-cta" className="py-20 sm:py-24 bg-[#0F1210] text-[#FAF7F2] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Logo & Links */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <span className="font-serif font-black tracking-[0.2em] text-lg sm:text-xl text-[#FAF7F2] block">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-charcoal-400 font-bold uppercase">
                {siteConfig.subName}
              </span>
            </div>

            <nav className="flex flex-col space-y-2 text-xs sm:text-sm font-bold text-charcoal-300">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-neon-green transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* MIDDLE: Big Ending Statement & Signature */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 px-2">
            <div className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-ivory-50 leading-relaxed tracking-tight">
              <p>如果你有一套做了 10 年、20 年、30 年的方法，</p>
              <p className="text-charcoal-400">不要只留在自己的脑里。</p>
              <p className="text-neon-green">我们可以把它变成下一代的系统。</p>
            </div>

            <p className="font-serif text-xl sm:text-2xl font-black italic text-bronze-300 pt-1 tracking-wider">
              Ronnie Fung
            </p>
          </div>

          {/* RIGHT: WhatsApp, QR Code & Slogan */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-4">
            {/* WhatsApp direct button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp 与我联系</span>
            </a>

            {/* WeChat QR Card */}
            <button
              onClick={() => {
                handleCopyWeChat();
                if (onOpenContact) onOpenContact();
              }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-bronze-400 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal-950 flex items-center justify-center shrink-0 border border-white/10">
                <QrCode className="w-6 h-6 text-neon-green" />
              </div>
              <div className="text-xs sm:text-sm font-mono leading-tight">
                <span className="block text-charcoal-300 font-bold">微信 WeChat</span>
                <span className="text-neon-green font-bold">
                  {copiedWechat ? "已复制 ✓" : siteConfig.contact.wechat}
                </span>
              </div>
            </button>

            {/* Subtle Slogan */}
            <div className="text-right text-xs sm:text-sm font-serif text-charcoal-400 font-bold space-y-0.5">
              <p>让更多智慧 照亮更多人</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-charcoal-500">
                A BRIGHTER TOMORROW
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-xs font-mono text-charcoal-400">
          © {new Date().getFullYear()} Ronnie Fung. All Rights Reserved. · 传统智慧 × 品牌 × AI
        </div>
      </div>
    </footer>
  );
};
