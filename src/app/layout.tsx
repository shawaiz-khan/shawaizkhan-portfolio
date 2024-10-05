/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
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
  return (
    <html lang="en">
      <head>
        <title>Shawaiz Khan - Frontend Web Developer</title>
        <meta name="description" content="I am Shawaiz Khan, a frontend web developer specialized in React, JavaScript, TypeScript, TailwindCSS, Next.js, and Node.js." />
        <meta name="keywords" content="Shawaiz Khan, Frontend Developer, React, JavaScript, TypeScript, TailwindCSS, Next.js, Node.js, UI/UX Design, Web Development, Graphic Design" />
        <meta name="author" content="Shawaiz Khan" />
        <meta property="og:title" content="Shawaiz Khan - Frontend Web Developer" />
        <meta property="og:description" content="I am Shawaiz Khan, a frontend web developer specialized in React, JavaScript, TypeScript, TailwindCSS, Next.js, and Node.js." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />

        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <NavBar />
          {children}
          <SpeedInsights />
          <Footer />
          <GoToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}