"use client";

import { useState } from "react";
import ChatBubble from "./ChatBubble";
import InputBox from "./InputBox";

type Message = {
  role: "ai" | "user";
  content: string;
};

export default function ChatWindow() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Welcome! Let's start your interview. What is closure in JavaScript?",
    },
  ]);

  const handleSend = (text: string) => {
    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const aiReply: Message = {
        role: "ai",
        content:
          "Great answer! A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
      };

      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="font-semibold">Frontend Interview</h2>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}

        {isTyping && (
          <div className="chat chat-start">
            <div className="chat-bubble opacity-70">Typing...</div>
          </div>
        )}
      </div>

      {/* Input */}
      <InputBox onSend={handleSend} isTyping={isTyping} />
    </div>
  );
}
