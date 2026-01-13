"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

export const MagneticButton = ({
    children,
    className,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });
    const ySpring = useSpring(y, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });

    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const relativeX = e.clientX - (left + width / 2);
        const relativeY = e.clientY - (top + height / 2);

        x.set(relativeX * 0.1);
        y.set(relativeY * 0.1);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ transform, display: "inline-block" }}
        >
            {children}
        </motion.div>
    );
};
