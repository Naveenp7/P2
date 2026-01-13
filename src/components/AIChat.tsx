"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
        { role: "ai", content: "Hi! I'm Naveen's AI Assistant. Ask me anything about his skills, projects, or experience." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg }),
            });

            const data = await res.json();
            setMessages((prev) => [...prev, { role: "ai", content: data.response }]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "ai", content: "Oops, something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="absolute bottom-16 right-0 w-80 md:w-96 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                            style={{ maxHeight: "500px", height: "400px" }}
                        >
                            {/* Header */}
                            <div className="bg-neutral-800/50 p-4 border-b border-neutral-700 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="font-semibold text-white">Naveen AI</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${msg.role === 'user'
                                                ? 'bg-emerald-600 text-white rounded-br-none'
                                                : 'bg-neutral-800 text-neutral-200 rounded-bl-none'
                                            }`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-neutral-800 rounded-xl px-4 py-2 rounded-bl-none flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-3 border-t border-neutral-800 bg-neutral-900">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                    className="flex gap-2"
                                >
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about my projects..."
                                        className="flex-1 bg-neutral-800 border-none rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-emerald-500 placeholder:text-neutral-500 outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                    {isOpen ? <X size={24} /> : <Bot size={24} />}
                </button>
            </div>
        </>
    );
}
