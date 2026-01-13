"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/components/ui/ProjectModal";

interface Project {
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    technicalTags?: string[];
    links: {
        demo: string;
        code: string;
    };
    image: string;
    stat: string;
    className?: string; // For bento grid spans
    challenges?: string[];
}

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn("h-full cursor-pointer", project.className)}
        onClick={onClick}
    >
        <SpotlightCard className="h-full flex flex-col group hover:ring-2 hover:ring-emerald-500/50 transition-all">
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                        <ArrowUpRight className="text-emerald-500" size={24} />
                    </div>
                    <div className="flex gap-3 relative z-10">
                        {/* We use stopPropagation to prevent modal opening when clicking links directly */}
                        <Link href={project.links.code} onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-white transition-colors"><Github size={20} /></Link>
                        <Link href={project.links.demo} onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-white transition-colors"><ExternalLink size={20} /></Link>
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "AI-Based Electricity Management System",
            description: "Web-based AI analytics platform for appliance-wise electricity usage tracking and interactive dashboards. implementing data-driven insights to reduce power usage.",
            longDescription: "This advanced platform utilizes AI to disaggregate total household electricity consumption into appliance-level data. By creating a smart feedback loop, it empowers users to understand exactly where their energy dollars are going. The system features real-time dashboards built with React and D3.js, providing visual insights that drive behavioral change.",
            tags: ["AI Analytics", "Web Platform", "Energy Efficiency"],
            technicalTags: ["Python", "TensorFlow", "React", "D3.js", "Flask", "PostgreSQL"],
            challenges: [
                "Disaggregating usage data from a single meter reading source.",
                "Optimizing dashboard performance for real-time data streams.",
                "Ensuring data privacy and secure user authentication."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-blue-950",
            stat: "Smart Analytics",
            className: "md:col-span-2"
        },
        {
            title: "Smart Board – Interactive Digital Classroom",
            description: "Interactive digital smart board system enhancing real-time classroom interaction and smart content display. Improved teaching efficiency and student engagement.",
            longDescription: "A hardware-software solution designed to modernize traditional classrooms. This system integrates touch interaction with digital content delivery, allowing teachers to annotate directly on slides, save sessions as PDFs, and stream content to student devices in real-time.",
            tags: ["EdTech", "Interactive Systems", "Academic Project"],
            technicalTags: ["C++", "Qt Framework", "Touch Drivers", "Socket.io", "Raspberry Pi"],
            challenges: [
                "Achieving low-latency touch response for writing.",
                "Synchronizing state across multiple student devices.",
                "Designing a UI intuitive enough for non-technical teachers."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-emerald-950",
            stat: "Academic Project",
            className: "md:col-span-1"
        },
        {
            title: "Urban Safety Monitoring System",
            description: "Public platform for reporting urban incidents with live visualization of accidents and hazards. Scalable architecture for real-world civic deployment.",
            longDescription: "Award-winning civic technology platform that crowdsources safety data. Citizens can report hazards (potholes, broken lights) or accidents via a mobile-friendly web app. The data is aggregated onto a live heat map for authorities to prioritize maintenance. Includes verification mechanisms to prevent spam.",
            tags: ["Hackathon Winner", "Civic Tech", "Real-time Ops"],
            technicalTags: ["React", "Mapbox GL", "Firebase", "Node.js", "Express"],
            challenges: [
                "Handling concurrent reports during high-traffic events.",
                "Implementing accurate geolocation verification.",
                "Designing a resilient backend that functions offline-first."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-orange-950",
            stat: "🏆 2nd Prize",
            className: "md:col-span-1"
        },
        {
            title: "FaceSnap – Face Recognition System",
            description: "Computer Vision project for face detection and recognition optimized for fast, accurate identification in event-based and real-time use cases.",
            longDescription: "A robust face recognition pipeline built for event security and attendance. It utilizes deep metric learning to generate 128-d face embeddings, achieving high accuracy even in variable lighting conditions. Optimized for edge deployment.",
            tags: ["Computer Vision", "Face Recognition", "Real-time"],
            technicalTags: ["Python", "OpenCV", "FaceNet", "PyTorch", "NumPy"],
            challenges: [
                "Optimizing inference speed for real-time video feeds.",
                "Addressing bias and accuracy drops in low-light.",
                "Managing a growing database of face embeddings efficiently."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-purple-950",
            stat: "High Accuracy",
            className: "md:col-span-1"
        },
        {
            title: "CodeRoom – Collaborative Coding",
            description: "Real-time multi-user collaborative coding environment allowing simultaneous code writing, execution, and testing. Designed for interviews and learning.",
            longDescription: "A Google Docs-style editor for code. Multiple users can edit the same file simultaneously with operational transformation handling conflict resolution. Includes a remote code execution engine to run Python and JS snippets safely in a sandboxed environment.",
            tags: ["Real-time Web", "Collaboration", "EdTech"],
            technicalTags: ["Next.js", "Socket.io", "Docker", "Monaco Editor", "Redis"],
            challenges: [
                "Synchronizing cursors and text changes in real-time.",
                "Securely executing untrusted user code on the server.",
                "Handling disconnects and reconnections gracefully."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-indigo-950",
            stat: "Multi-user",
            className: "md:col-span-1"
        },
        {
            title: "Finance Manager for Small Business",
            description: "Personal project actively used for daily income and expense tracking. Focused on simplicity, accuracy, and insights for a family-owned business.",
            longDescription: "A custom-built ERP solution tailored for small business needs. Unlike generic tools, this was built with specific workflows in mind—daily cash reconciliation, vendor management, and tax estimation. It features a mobile-first design for on-the-go entry and generates monthly PDF reports.",
            tags: ["FinTech", "Personal Tool", "Production Use"],
            technicalTags: ["Next.js", "Supabase", "Tailwind CSS", "Recharts", "Vercel"],
            challenges: [
                "Designing for non-tech-savvy users (family members).",
                "Ensuring 100% data accuracy and backup reliability.",
                "Migrating legacy paper records into the digital system."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-green-950",
            stat: "Actively Used",
            className: "md:col-span-3"
        },
        {
            title: "Gym Management System",
            description: "Full-stack web application with QR-code based daily attendance, admin/member dashboards, and engagement analytics.",
            longDescription: "A comprehensive SaaS-like platform for gym owners. Members get a generated QR code for check-ins. Admins have a dashboard to track peak hours, membership expiries, and revenue. Includes automated email reminders for renewals.",
            tags: ["Full Stack", "QR Code", "Management System"],
            technicalTags: ["MERN Stack", "QRCode.js", "Chart.js", "JWT Auth", "Stripe"],
            challenges: [
                "Preventing QR code sharing/fraud.",
                "Building a responsive dashboard with complex data visualization.",
                "Handling recurring subscription payments securely."
            ],
            links: { demo: "#", code: "#" },
            image: "bg-red-950",
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
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}
