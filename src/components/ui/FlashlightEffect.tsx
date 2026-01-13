"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FlashlightEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block">
            <motion.div
                className="absolute inset-0 z-30 opacity-20"
                animate={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
            {/* Background Grid Pattern revealed by light */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            />
        </div>
    );
};
