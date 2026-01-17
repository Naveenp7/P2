"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({ href, children, mobile = false, onClick }: { href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className={cn(
            "text-sm font-medium transition-colors hover:text-emerald-400",
            mobile ? "block py-4 text-lg" : "text-neutral-400"
        )}
    >
        {children}
    </Link>
);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-8 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-emerald-400 transition-colors">
                    NAVEEN<span className="text-emerald-500">.</span>
                </Link>

                {/* Desktop Nav - Hidden now because we used Floating Dock for Desktop */}
                <nav className="hidden items-center gap-8">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Work</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>

                {/* Socials & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                        <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><Github size={18} /></Link>
                        <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                    </div>
                    <Link href="#contact" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-emerald-400 hover:text-black transition-colors">
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/10 px-6 py-4 shadow-xl"
                    >
                        <nav className="flex flex-col">
                            <NavLink href="#about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
                            <NavLink href="#skills" mobile onClick={() => setIsOpen(false)}>Skills</NavLink>
                            <NavLink href="#projects" mobile onClick={() => setIsOpen(false)}>Work</NavLink>
                            <NavLink href="#experience" mobile onClick={() => setIsOpen(false)}>Experience</NavLink>
                            <NavLink href="#contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
