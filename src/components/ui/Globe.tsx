"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [0.1, 0.8, 1], // Emerald/Cyan glow
            markers: [
                // approximate location of Kerala, India
                { location: [10.770648425931826, 75.92621829484607], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={`relative flex items-center justify-center w-full max-w-[600px] h-[300px] md:h-[600px] mx-auto overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 z-10 w-full h-full bg-transparent pointer-events-none" />
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                className="w-full h-full opacity-90 transition-opacity hover:opacity-100"
            />
        </div>
    );
};
