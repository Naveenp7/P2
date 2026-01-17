"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            <BackgroundBeams />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-neutral-400 tracking-wide">AVAILABLE FOR NEW PROJECTS</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Hi, I’m Naveen <span className="inline-block animate-wave origin-[70%_70%]">👋</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">AI & Full-Stack Developer</span><br />
                    crafting intelligent, real-world systems
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I design and build production-ready AI applications, data-driven dashboards, and full-stack platforms that solve real problems — from computer vision to intelligent analytics.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Link href="#projects">
                        <MagneticButton className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:shadow-lg hover:shadow-emerald-500/20">
                            <span className="mr-2">View Projects</span>
                            <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
                        </MagneticButton>
                    </Link>
                    <Link href="#contact">
                        <MagneticButton className="group inline-flex h-12 items-center justify-center px-8 font-medium text-white transition-all duration-300 hover:text-emerald-400">
                            <span>Contact Me</span>
                            <ArrowRight className="ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={18} />
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
