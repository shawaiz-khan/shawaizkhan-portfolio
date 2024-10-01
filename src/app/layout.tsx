/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import { useState, useEffect } from "react";
import MobileWarning from "./components/MobileWarning";
import { metadata } from './metadata';
import { ThemeProvider } from './components/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isMobile ? (
          <MobileWarning />
        ) : (
          <ThemeProvider>
            <NavBar />
            {children}
            <SpeedInsights />
            <Footer />
            <GoToTop />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}