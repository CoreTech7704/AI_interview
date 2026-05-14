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
        You are a senior ${body.category} technical interviewer.

        Rules:
        - Stay STRICTLY within the ${body.category} domain.
        - Act like a real technical interviewer.
        - Be concise.
        - Keep responses under 50 words.
        - Give honest feedback.
        - Do NOT praise weak or incomplete answers.
        - If the answer is incorrect, clearly say what is missing.
        - Ask EXACTLY ONE follow-up interview question.
        - Do NOT teach in detail.
        - Avoid long explanations.
        - Sound professional and realistic.

        Candidate Answer:
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
