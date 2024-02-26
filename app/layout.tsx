"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import InitialScreen from "@/components/main/InitialScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {showContent ? (
          <div className="fade-in">
            <StarsCanvas />
            <Navbar />
            {children}
            <Footer />
          </div>
        ) : (
          <InitialScreen />
        )}
      </body>
    </html>
  );
}
