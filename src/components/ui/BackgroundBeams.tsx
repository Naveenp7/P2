"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/20 blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/20 blur-[100px]"
            />

            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Shooting Beams */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ top: "-10%", opacity: 0 }}
                        animate={{ top: "120%", opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.5,
                            repeatDelay: 2
                        }}
                        className="absolute w-[1px] h-[20vh] bg-gradient-to-b from-transparent via-emerald-500 to-transparent left-[50%] opacity-50 blur-sm"
                        style={{ left: `${20 + i * 30}%` }}
                    />
                ))}
            </div>
        </div>
    );
};
