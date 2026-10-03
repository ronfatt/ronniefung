"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  X, 
  MessageCircle, 
  QrCode, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  Sparkles
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialTopic = "传统经验系统化与 AI 产品定制",
}) => {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    field: initialTopic,
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(siteConfig.contact.wechat);
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage + ` [探讨方向：${formData.field || initialTopic}]`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="bg-ivory-50 rounded-3xl border-2 border-ivory-300 shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b-2 border-ivory-200 flex items-start justify-between bg-ivory-100">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-bronze-800 font-black mb-1.5 uppercase">
              <Sparkles className="w-4 h-4 text-neon-green" />
              <span>LET’S CONNECT</span>
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-black text-charcoal-950">
              与 Ronnie 开启探讨
            </h3>
            <p className="text-sm text-charcoal-600 mt-1 font-medium">
              Turning Experience Into Systems
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-ivory-200 text-charcoal-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-7 space-y-6">
          {/* Quick Direct Actions - Big touch buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-black text-emerald-950 block">
                    WhatsApp 直联
                  </span>
                  <span className="text-xs text-emerald-700 font-mono font-medium">
                    {siteConfig.contact.whatsapp}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* WeChat */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-ivory-100 border-2 border-ivory-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-charcoal-950 text-white flex items-center justify-center shadow-sm">
                  <QrCode className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <span className="text-sm font-black text-charcoal-950 block">
                    微信 WeChat
                  </span>
                  <span className="text-xs text-charcoal-600 font-mono font-medium">
                    {siteConfig.contact.wechat}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyWeChat}
                className="px-3 py-1.5 rounded-xl bg-ivory-50 hover:bg-ivory-200 border border-ivory-300 text-charcoal-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="复制微信号"
              >
                {copiedWeChat ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copiedWeChat ? "已复制" : "复制"}</span>
              </button>
            </div>
          </div>

          {/* QR Code Placeholder Box - Clear & Fresh */}
          <div className="p-5 rounded-2xl bg-ivory-100 border-2 border-ivory-300 flex items-center gap-5">
            <div className="w-24 h-24 bg-ivory-50 border-2 border-charcoal-400 rounded-2xl flex flex-col items-center justify-center p-2 text-center shrink-0 shadow-inner">
              <QrCode className="w-12 h-12 text-charcoal-800" />
            </div>
            <div className="text-sm space-y-1">
              <p className="font-black text-base text-charcoal-950">
                现场扫码加好友 / 预约私享交流
              </p>
              <p className="text-charcoal-600 leading-snug">
                今晚私享会结束后，可与 Ronnie 当面沟通具体经验与系统落地方向。
              </p>
              <span className="inline-block font-mono text-xs font-bold text-bronze-800 bg-bronze-100 px-2 py-0.5 rounded">
                ID: {siteConfig.contact.wechat}
              </span>
            </div>
          </div>

          {/* Quick Leave Message Form - Large Input Fields */}
          <div className="pt-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-charcoal-700 mb-4">
              或留下你的专业方向，Ronnie 将在 24 小时内回复：
            </h4>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-jade-50 border-2 border-jade-300 text-center space-y-2">
                <Check className="w-8 h-8 text-jade-700 mx-auto" />
                <p className="font-sans text-lg font-black text-jade-950">
                  信息已记录！
                </p>
                <p className="text-sm text-jade-800 font-medium">
                  感谢您的关注。Ronnie 会尽快梳理适合您领域的初步系统方案并与您取得联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                    老师姓名 / 称呼
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例如：陈老师 / 王师傅"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border-2 border-ivory-300 bg-ivory-50 focus:outline-none focus:border-neon-green text-charcoal-950 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                      专注领域
                    </label>
                    <input
                      type="text"
                      placeholder="命理/风水/数字/心灵等"
                      value={formData.field}
                      onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border-2 border-ivory-300 bg-ivory-50 focus:outline-none focus:border-neon-green text-charcoal-950 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                      微信 / 手机号
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="你的联系方式"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border-2 border-ivory-300 bg-ivory-50 focus:outline-none focus:border-neon-green text-charcoal-950 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                    希望重点转化的经验（选填）
                  </label>
                  <textarea
                    rows={2}
                    placeholder="例如：想把做了 15 年的号码算法做成小程序 / 想把学员答疑做成 AI..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border-2 border-ivory-300 bg-ivory-50 focus:outline-none focus:border-neon-green text-charcoal-950 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-charcoal-950 hover:bg-jade-700 text-ivory-50 text-base font-black tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-neon-green" />
                  <span>提交预约探讨</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
