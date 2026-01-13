"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code2, Layers } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";

interface ProjectDetails {
    title: string;
    description: string;
    longDescription?: string; // New field for deep dive
    tags: string[];
    technicalTags?: string[]; // Detailed text stack
    links: {
        demo: string;
        code: string;
    };
    image: string;
    stat: string;
    challenges?: string[]; // What was hard?
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectDetails | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed top-0 left-0 right-0 bottom-0 md:top-[5%] md:bottom-[5%] md:left-[10%] md:right-[10%] z-50 flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-neutral-900 border border-neutral-800 w-full h-full md:rounded-2xl md:max-w-4xl md:h-auto md:max-h-full shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full text-neutral-400 hover:text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            {/* Banner Image Area */}
                            <div className={`h-48 md:h-64 w-full ${project.image} relative overflow-hidden shrink-0`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30 mb-3 inline-block">
                                        {project.stat}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{project.title}</h2>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Left Column: Description */}
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                                <Layers size={18} className="text-emerald-500" /> Project Overview
                                            </h3>
                                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                                {project.longDescription || project.description}
                                            </p>
                                        </div>

                                        {project.challenges && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-3">Key Challenges & Solutions</h3>
                                                <ul className="space-y-3">
                                                    {project.challenges.map((challenge, idx) => (
                                                        <li key={idx} className="flex gap-3 text-sm text-neutral-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                                            {challenge}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column: Meta Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">Links</h3>
                                            <div className="flex flex-col gap-3">
                                                <Link
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-emerald-500/20"
                                                >
                                                    <ExternalLink size={16} /> Live Demo
                                                </Link>
                                                <Link
                                                    href={project.links.code}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-all border border-neutral-700"
                                                >
                                                    <Github size={16} /> Source Code
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <Code2 size={16} /> Tech Stack
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {(project.technicalTags || project.tags).map(tag => (
                                                    <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};
