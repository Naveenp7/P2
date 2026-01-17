"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Github, Linkedin, Mail, Home, AppWindow, User, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <>
            {/* Floating Badge to hint shortcut */}
            <div
                onClick={() => setOpen(true)}
                className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-3 py-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg text-xs text-neutral-400 cursor-pointer hover:text-white hover:border-neutral-700 transition-colors"
            >
                <div className="flex items-center gap-1">
                    <span className="text-lg">⌘</span>
                    <span>K</span>
                </div>
                <span>Menu</span>
            </div>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            >
                <div className="w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                    {/* Accessibility Title */}
                    <div className="sr-only" id="radix-:r0:">Command Menu</div>
                    <div className="flex items-center border-b border-neutral-800 px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none text-white placeholder:text-neutral-500"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-neutral-800">
                        <Command.Empty className="py-6 text-center text-sm text-neutral-500">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="text-xs font-medium text-neutral-500 px-2 py-1.5 mb-2">
                            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                <Home className="mr-2 h-4 w-4" />
                                Home
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#projects"))}>
                                <AppWindow className="mr-2 h-4 w-4" />
                                Projects
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#about"))}>
                                <User className="mr-2 h-4 w-4" />
                                About Me
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#skills"))}>
                                <Zap className="mr-2 h-4 w-4" />
                                Skills
                            </CommandItem>
                        </Command.Group>

                        <Command.Group heading="Socials" className="text-xs font-medium text-neutral-500 px-2 py-1.5 mb-2">
                            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/Naveenp7", "_blank"))}>
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.location.href = "mailto:naveensanthosh830@gmail.com")}>
                                <Mail className="mr-2 h-4 w-4" />
                                Email
                            </CommandItem>
                        </Command.Group>

                        <Command.Group heading="Actions" className="text-xs font-medium text-neutral-500 px-2 py-1.5">
                            <CommandItem onSelect={() => runCommand(() => window.print())}>
                                <span className="mr-2">🖨️</span>
                                Print Portfolio
                            </CommandItem>
                        </Command.Group>
                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    );
}

const CommandItem = ({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) => {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3 py-2.5 text-sm text-neutral-300 rounded-lg cursor-pointer aria-selected:bg-emerald-500/10 aria-selected:text-emerald-400 transition-colors"
        >
            {children}
        </Command.Item>
    );
};
