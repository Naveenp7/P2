"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        code: string;
    };
    image: string;
    stat: string;
    className?: string; // For bento grid spans
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn("h-full", project.className)}
    >
        <SpotlightCard className="h-full flex flex-col group">
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
                        <ArrowUpRight className="text-emerald-500" size={24} />
                    </div>
                    <div className="flex gap-3">
                        <Link href={project.links.code} className="text-neutral-500 hover:text-white transition-colors"><Github size={20} /></Link>
                        <Link href={project.links.demo} className="text-neutral-500 hover:text-white transition-colors"><ExternalLink size={20} /></Link>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-emerald-500 text-sm font-medium mb-4">{project.stat}</p>

                <p className="text-neutral-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Subtle decorative gradient at bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </SpotlightCard>
    </motion.div>
);

export default function Projects() {
    const projects: Project[] = [
        {
            title: "AI-Based Electricity Management System",
            description: "Web-based AI analytics platform for appliance-wise electricity usage tracking and interactive dashboards. implementing data-driven insights to reduce power usage.",
            tags: ["AI Analytics", "Web Platform", "Energy Efficiency"],
            links: { demo: "#", code: "#" },
            image: "bg-blue-900",
            stat: "Smart Analytics",
            className: "md:col-span-2"
        },
        {
            title: "Smart Board – Interactive Digital Classroom",
            description: "Interactive digital smart board system enhancing real-time classroom interaction and smart content display. Improved teaching efficiency and student engagement.",
            tags: ["EdTech", "Interactive Systems", "Academic Project"],
            links: { demo: "#", code: "#" },
            image: "bg-emerald-900",
            stat: "Academic Project",
            className: "md:col-span-1"
        },
        {
            title: "Urban Safety Monitoring System",
            description: "Public platform for reporting urban incidents with live visualization of accidents and hazards. Scalable architecture for real-world civic deployment.",
            tags: ["Hackathon Winner", "Civic Tech", "Real-time Ops"],
            links: { demo: "#", code: "#" },
            image: "bg-orange-900",
            stat: "🏆 2nd Prize",
            className: "md:col-span-1"
        },
        {
            title: "FaceSnap – Face Recognition System",
            description: "Computer Vision project for face detection and recognition optimized for fast, accurate identification in event-based and real-time use cases.",
            tags: ["Computer Vision", "Face Recognition", "Real-time"],
            links: { demo: "#", code: "#" },
            image: "bg-purple-900",
            stat: "High Accuracy",
            className: "md:col-span-1"
        },
        {
            title: "CodeRoom – Collaborative Coding",
            description: "Real-time multi-user collaborative coding environment allowing simultaneous code writing, execution, and testing. Designed for interviews and learning.",
            tags: ["Real-time Web", "Collaboration", "EdTech"],
            links: { demo: "#", code: "#" },
            image: "bg-indigo-900",
            stat: "Multi-user",
            className: "md:col-span-1"
        },
        {
            title: "Finance Manager for Small Business",
            description: "Personal project actively used for daily income and expense tracking. Focused on simplicity, accuracy, and insights for a family-owned business.",
            tags: ["FinTech", "Personal Tool", "Production Use"],
            links: { demo: "#", code: "#" },
            image: "bg-green-900",
            stat: "Actively Used",
            className: "md:col-span-3"
        },
        {
            title: "Gym Management System",
            description: "Full-stack web application with QR-code based daily attendance, admin/member dashboards, and engagement analytics.",
            tags: ["Full Stack", "QR Code", "Management System"],
            links: { demo: "#", code: "#" },
            image: "bg-red-900",
            stat: "Full Stack",
            className: "md:col-span-3"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-neutral-950">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase">Selected Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                            Building the Future.<br />
                            <span className="text-neutral-500">One project at a time.</span>
                        </h2>
                    </div>
                    <Link href="#" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors pb-2 border-b border-transparent hover:border-emerald-400">
                        View GitHub <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
