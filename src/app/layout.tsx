import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import AIChat from "@/components/AIChat";
import { CommandMenu } from "@/components/CommandMenu";
import { FloatingDock } from "@/components/FloatingDock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naveen | Full-Stack Developer & UI/UX Designer",
  description: "Portfolio of a high-tier developer building intelligent systems and elegant digital experiences.",
};

import { MatrixEffect } from "@/components/MatrixEffect";
import { FlashlightEffect } from "@/components/ui/FlashlightEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        <MatrixEffect />
        <FlashlightEffect />
        <SmoothScrolling />
        {children}
        <AIChat />
        <CommandMenu />
        <FloatingDock />
      </body>
    </html>
  );
}
