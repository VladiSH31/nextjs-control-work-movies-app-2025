import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header-component/HeaderComponent";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Watch Me - Movies & TV Shows Online", // Заголовок за замовчуванням
        template: "%s | Watch Me", // Шаблон для дочірніх сторінок
    },
    description: "Your ultimate library for movies and TV shows. Discover new releases, popular titles, and top-rated content.",
    keywords: ["movies", "TV shows", "online streaming", "cinema", "Watch Me"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <HeaderComponent/>
        {children}
      </body>
    </html>
  );
}
