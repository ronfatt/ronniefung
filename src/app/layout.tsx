import type { Metadata, Viewport } from "next";
import { Noto_Serif_SC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const serifFont = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF9F5",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Ronnie Fung",
    "玄学AI",
    "品牌策划",
    "命理数字化",
    "风水AI",
    "数字能量",
    "心灵疗愈",
    "AI产品策划",
    "知识资产架构",
  ],
  authors: [{ name: "Ronnie Fung" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-ivory-50 text-charcoal-900 selection:bg-jade-700 selection:text-ivory-50">
        {children}
      </body>
    </html>
  );
}
