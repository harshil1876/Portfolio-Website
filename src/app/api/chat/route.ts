import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildChatContext } from "@/lib/chatContext";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    // Prepare history for Gemini
    const systemInstruction = buildChatContext();
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "SYSTEM PROMPT: " + systemInstruction + "\n\nPlease strictly adhere to this context. Acknowledge." }],
        },
        {
          role: "model",
          parts: [{ text: "Acknowledged. I am ready to act as the AI assistant for this portfolio." }],
        },
        // Map frontend messages to Gemini format
        ...messages.slice(0, -1).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.5,
      },
    });

    const latestMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
