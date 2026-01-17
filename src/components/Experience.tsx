"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Briefcase, Award } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            type: "achievement",
            role: "2nd Prize Winner",
            company: "MATRIX 30-Hour Hackathon",
            period: "MES College of Engineering",
            description: "Secured runner-up position in a competitive 30-hour development challenge."
        },
        {
            type: "achievement",
            role: "3rd Prize Winner",
            company: "KOTEC H Tech Fest Hackathon",
            period: "Qismat Foundation × Municipality",
            description: "Recognized for innovative technical solution in civic tech domain."
        },
        {
            type: "work",
            role: "AI Vibe Coding Program",
            company: "ADTEC",
            period: "Program/Activity",
            description: "Conducted AI coding workshops for juniors, covering AI-assisted development, prompt engineering, and real-world applications."
        },
        {
            type: "award",
            role: "Certifications",
            company: "Various Platforms",
            period: "Continuous Learning",
            description: "NPTEL Python for Data Science • IBM Python for Data Science & AI • IBM Accessing Hadoop Data • Simplilearn R Programming"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-neutral-950 relative w-full overflow-hidden">
            {/* Subtle background line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-900 hidden md:block" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">Journey</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                        Experience & Achievements
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-emerald-500 mt-6 z-20" />

                            <div className={`flex-1 md:text-right ${index % 2 !== 0 ? "md:text-left" : ""}`}>
                                <div className="inline-flex items-center gap-2 text-emerald-500 font-medium mb-2">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-lg text-neutral-400 mb-4">{exp.company}</p>
                            </div>

                            <div className="flex-1">
                                <div className={`p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors ${index % 2 !== 0 ? "" : ""}`}>
                                    <div className="mb-4 text-emerald-500">
                                        {exp.type === 'work' ? <Briefcase size={24} /> : exp.type === 'achievement' ? <Trophy size={24} /> : <Award size={24} />}
                                    </div>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
