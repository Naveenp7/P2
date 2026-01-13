"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Palette, Smartphone, Terminal, Database } from "lucide-react";
import { IconCloud } from "@/components/ui/IconCloud";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/30 transition-all duration-300"
    >
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-sm font-medium">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    const expertises = [
        {
            icon: Code2,
            title: "Programming Languages",
            skills: ["Python", "JavaScript", "C", "R", "HTML", "CSS", "Dart"]
        },
        {
            icon: Brain,
            title: "Frameworks & Libraries",
            skills: ["React", "Flask", "Streamlit", "Flutter", "OpenCV", "MediaPipe", "Scikit-learn"]
        },
        {
            icon: Brain,
            title: "AI & ML Expertise",
            skills: ["Machine Learning", "Computer Vision", "NLP", "Speech-to-Text", "Face Recognition", "Pose Estimation"]
        },
        {
            icon: Database,
            title: "Backend & Databases",
            skills: ["Firebase Auth", "Firestore", "SQLite", "REST APIs"]
        },
        {
            icon: Terminal,
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "Roboflow", "Groq LLM APIs", "VS Code", "Linux"]
        },
        {
            icon: Smartphone, // Using Smartphone as a placeholder for "Core Strengths" or maybe another icon like Zap
            title: "Core Strengths",
            skills: ["System Design", "Real-Time Data Processing", "Rapid Prototyping", "Problem Solving", "Hackathons"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-neutral-950">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                            Technical Arsenal
                        </h2>
                    </div>
                    {/* Icon Cloud Integration */}
                    <div className="hidden md:block">
                        {/* This could be placed elsewhere, but for now seeing where it fits best. 
                           Actually, let's put it on the side or top interactively 
                       */}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side: Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-6 flex-1">
                        {expertises.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <SkillCard {...item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Interactive Cloud */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex justify-center md:sticky md:top-32 md:self-start py-8"
                    >
                        <IconCloud />
                    </motion.div>
                </div>
            </div>

            <div className="mt-16 w-full">
                <InfiniteMarquee
                    items={[
                        "Python", "TensorFlow", "PyTorch", "Next.js", "React", "TypeScript",
                        "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Git",
                        "Scikit-learn", "OpenCV", "FastAPI", "AWS", "Google Cloud"
                    ]}
                    direction="left"
                    speed="normal"
                />
            </div>
        </section>
    );
}
