import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "청년정책 매칭 - 나에게 맞는 청년 지원정책 찾기",
    template: "%s | 청년정책 매칭",
  },
  description:
    "출생연도, 거주 지역, 취업 상태만 입력하면 신청 가능한 청년 정책을 바로 매칭해드립니다. 주거, 취업, 금융, 교육 등 정부·지자체 청년정책을 한눈에 확인하세요.",
  keywords:
    "청년정책, 청년지원, 청년주거, 월세지원, 청년도약계좌, 청년미래적금, 청년정책매칭, 정부지원금",
  metadataBase: new URL("https://youth.moduncalc.com"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "청년정책 매칭",
    url: "https://youth.moduncalc.com",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NX4JK10SS6"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-NX4JK10SS6');
        `}</Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3741035032582828"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="max-w-[680px] mx-auto px-5 py-5">
            {children}
          </div>
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
