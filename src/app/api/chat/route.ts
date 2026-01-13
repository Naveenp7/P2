import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const apiKey = process.env.GROQ_API_KEY;

        // Fallback if no key provided (for demo purposes)
        if (!apiKey) {
            return NextResponse.json({
                response: "I'm ready to chat! Please configure the GROQ_API_KEY in your .env file to enable my full intelligence. For now, I can tell you that Naveen is a skilled Full-Stack Developer & AI Enthusiast."
            });
        }

        const groq = new Groq({ apiKey });

        const systemPrompt = `
      You are Naveen's AI Portfolio Assistant. Your goal is to represent Naveen professionally and enthusiastically.
      
      Here is context about Naveen:
      - Role: AI & Full-Stack Developer, undergrad from Kerala, India.
      - Tech Stack: Python, React, Next.js, Flutter, Tailwind, Groq, OpenCV, TensorFlow.
      - Key Projects: AI Electricity Management, Smart Board, Urban Safety System (Hackathon Winner).
      - Traits: Problem solver, builder mindset, focuses on real-world impact.
      - Contact: naveensanthosh830@gmail.com.
      
      Answer questions concisely (under 3 sentences usually). Be helpful, professional, yet friendly.
      If asked about hiring, encourage them to reach out via email.
    `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: message },
            ],
            model: "llama3-8b-8192", // Fast & Free model on Groq
        });

        return NextResponse.json({
            response: completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."
        });

    } catch (error) {
        console.error("Groq API Error:", error);
        return NextResponse.json({ response: "Error connecting to AI service." }, { status: 500 });
    }
}
