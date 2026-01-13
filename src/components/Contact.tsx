"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-950">
            <div className="container px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Ready to build something extraordinary?
                    </h2>
                    <p className="text-xl text-neutral-400 mb-10">
                        I'm currently open to impactful projects and collaborations. If you have a challenging problem to solve, let's talk.
                    </p>

                    <a
                        href="mailto:naveensanthosh830@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-105 mb-12"
                    >
                        <Mail size={20} />
                        <span>naveensanthosh830@gmail.com</span>
                    </a>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-neutral-400">
                        <span>📍 Malappuram, Kerala, India</span>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/Naveenp7" target="_blank" className="p-3 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/naveen-p-42bb1a256" target="_blank" className="p-3 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
