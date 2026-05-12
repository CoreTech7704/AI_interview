import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.1:8b",
      prompt: `
        You are a senior frontend technical interviewer.

        Rules:
        - Be concise.
        - Keep responses under 60 words.
        - First give SHORT feedback.
        - Then ask EXACTLY ONE follow-up interview question.
        - Do NOT explain concepts in detail.
        - Do NOT teach unless necessary.
        - Sound like a real interviewer.
        - Avoid long paragraphs.

        Candidate Answer:
        ${body.message}
        ${body.message}
      `,
      stream: false,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    reply: data.response,
  });
}
