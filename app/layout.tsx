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

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
      >
          <div className="fade-in">
            <StarsCanvas />
            <Navbar />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
