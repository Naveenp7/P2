"use client";

import React from "react";
import { motion } from "framer-motion";

import GitHubStats from "@/components/GitHubStats";

export default function About() {
    return (
        <section id="about" className="py-24 bg-neutral-950 relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8">
                        More than just code.<br />
                        <span className="text-neutral-500">I build systems that solve real problems.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-neutral-400 text-lg leading-relaxed">
                        <div>
                            <p className="mb-6">
                                I’m an <strong className="text-white">Artificial Intelligence & Data Science undergraduate</strong> based in Kerala, India, with strong hands-on experience in building real-world, production-oriented applications.
                            </p>
                            <p className="mb-6">
                                I enjoy working at the intersection of <strong className="text-white">AI, data, and software engineering</strong> — turning complex ideas into practical systems that people can actually use. From computer vision and NLP to full-stack web and mobile apps, I focus on building solutions that are scalable, efficient, and impact-driven.
                            </p>
                            <p>
                                I actively participate in hackathons, rapid prototyping challenges, and self-driven projects, constantly pushing myself to learn, build, and improve.
                            </p>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    Languages
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["English", "Malayalam", "Hindi"].map(lang => (
                                        <span key={lang} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-sm">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Applied AI Systems",
                                        "Real-World ML",
                                        "Computer Vision",
                                        "Full-Stack Web/App",
                                        "Scalable Arch",
                                        "Hackathons"
                                    ].map(interest => (
                                        <span key={interest} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-sm">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Activity Section - Spans full width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-16"
                    >
                        <GitHubStats />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
