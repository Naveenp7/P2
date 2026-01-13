"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

// Icons for the dock
const links = [
    { title: "Home", icon: <Home size={20} />, href: "#" },
    { title: "About", icon: <User size={20} />, href: "#about" },
    { title: "Skills", icon: <Code size={20} />, href: "#skills" },
    { title: "Work", icon: <Briefcase size={20} />, href: "#projects" },
    { title: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

export function FloatingDock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex h-16 items-end gap-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 px-4 pb-3 pt-3 backdrop-blur-md shadow-2xl">
            {links.map((link) => (
                <DockIcon key={link.title} mouseX={mouseX} {...link} />
            ))}
        </div>
    );
}

function DockIcon({ mouseX, title, icon, href }: { mouseX: any; title: string; icon: any; href: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square w-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors text-neutral-400 cursor-pointer shadow-lg"
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
            >
                <div className="w-full h-full flex items-center justify-center">
                    {icon}
                </div>
            </motion.div>
        </Link>
    );
}
