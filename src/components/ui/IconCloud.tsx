"use client";

import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import React, { useEffect, useState } from "react";

const useIcons = (slugs: string[]) => {
    const [icons, setIcons] = useState<any>(null);
    useEffect(() => {
        fetchSimpleIcons({ slugs }).then(setIcons);
    }, [slugs]);

    if (icons) {
        return Object.values(icons.simpleIcons).map((icon: any) =>
            renderSimpleIcon({
                icon,
                size: 42,
                aProps: {
                    onClick: (e: any) => e.preventDefault(),
                },
            })
        );
    }

    return <a>Loading</a>;
};

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "openjdk", // java -> openjdk
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonwebservices", // amazonaws -> amazonwebservices
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode", // visualstudio -> visualstudiocode (checking if hyphen needed, actually search said visual-studio-code)
    "androidstudio",
    "sonarqube",
    "figma",
    "python",
    "pytorch",
    "tensorflow",
    "opencv",
    "pandas",
    "numpy",
    "scikitlearn",
];

export const IconCloud = () => {
    const icons = useIcons(slugs);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent SSR hydration mismatch for random IDs in Cloud component
    if (!mounted) return <div className="h-[32rem] w-full animate-pulse bg-neutral-900/20 rounded-lg"></div>;

    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
            <Cloud
                options={{
                    clickToFront: 500,
                    depth: 1,
                    imageScale: 2,
                    initial: [0.1, -0.1],
                    outlineColour: "#0000",
                    reverse: true,
                    tooltip: "native",
                    tooltipDelay: 0,
                    wheelZoom: false,
                }}
            >
                {icons}
            </Cloud>
        </div>
    );
};
