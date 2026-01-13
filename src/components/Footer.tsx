import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-neutral-900 text-center">
            <div className="container px-6 mx-auto">
                <p className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Naveen. Built with Next.js, Tailwind & Intelligence.
                </p>
            </div>
        </footer>
    );
}
