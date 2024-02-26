"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import InitialScreen from "@/components/main/Initial_Screen/InitialScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [showContent, setShowContent] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] ${showContent ? "overflow-y-scroll" : "overflow-y-hideen" } overflow-x-hidden`}
      >
        {showContent ? (
          <div className="fade-in">
            <StarsCanvas />
            <Navbar />
            {children}
            <Footer />
          </div>
        ) : (
          <InitialScreen setShowContent={()=>{setShowContent(true)}}/>
        )}
      </body>
    </html>
  );
}
