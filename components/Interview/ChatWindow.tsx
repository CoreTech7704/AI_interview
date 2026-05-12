"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import InputBox from "./InputBox";

type Message = {
  role: "ai" | "user";
  content: string;
  type?: "question" | "feedback" | "system";
};

export default function ChatWindow() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      type: "question",
      content:
        "Welcome! Let's start your interview. What is closure in JavaScript?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
  const userMessage: Message = {
    role: "user",
    content: text,
  };

  setMessages((prev) => [...prev, userMessage]);

  setIsTyping(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    });

    const data = await response.json();

    const aiMessage: Message = {
      role: "ai",
      type: "feedback",
      content: data.reply,
    };

    setMessages((prev) => [...prev, aiMessage]);

  } catch (error) {
    console.error(error);

  } finally {
    setIsTyping(false);
  }
};

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="font-semibold">Interview</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-8 space-y-2">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}

        {isTyping && (
          <div className="chat chat-start">
            <div className="chat-bubble opacity-70">Typing...</div>
          </div>
        )}

        {/* Bottom anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <InputBox onSend={handleSend} isTyping={isTyping} />
    </div>
  );
}
