"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Globe } from "@/components/ui/Globe";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: Contact Info */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">Get in touch</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Let’s build something <br />
                                <span className="text-neutral-500">extraordinary together.</span>
                            </h2>
                            <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-lg">
                                Whether you have a project in mind, need a consultant, or just want to chat about AI & tech — feel free to reach out. I'm always open to discussing new ideas.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:naveensanthosh830@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                                    <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-emerald-500/50 transition-colors">
                                        <Mail size={20} className="text-emerald-500" />
                                    </div>
                                    <span className="text-lg">naveensanthosh830@gmail.com</span>
                                </a>

                                <div className="flex items-center gap-4 text-neutral-300">
                                    <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800">
                                        <MapPin size={20} className="text-emerald-500" />
                                    </div>
                                    <span className="text-lg">Kerala, India</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-10">
                                {[
                                    { icon: Github, link: "https://github.com/Naveenp7" },
                                    { icon: Linkedin, link: "https://linkedin.com/in/naveen-p-42bb1a256" },
                                    { icon: Twitter, link: "https://twitter.com" }
                                ].map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.link}
                                        className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                                    >
                                        <social.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: 3D Globe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center relative"
                    >
                        {/* Glow effect behind globe */}
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                        <Globe className="relative z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
