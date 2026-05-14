"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import InputBox from "./InputBox";

type Message = {
  role: "ai" | "user";
  content: string;
  type?: "question" | "feedback" | "system";
};

const categories = [
  "Frontend",
  "Backend",
  "MERN Stack",
  "DevOps",
  "AI/ML",
  "System Design",
  "HR Interview",
];

export default function ChatWindow() {
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState(0);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      type: "system",
      content:
        "👋 Welcome to AI Interview Simulator! Please choose an interview category below.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const startInterview = async (category: string) => {
    setSelectedCategory(category);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: `I want to practice ${category} interview questions.`,
      },
    ]);

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Start a ${category} mock interview with an easy first question.`,
          category,
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        role: "ai",
        type: "question",
        content: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setQuestionCount(1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

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
          category: selectedCategory,
        }),
      });
      const data = await response.json();

      const parsed = JSON.parse(data.reply);

      const feedback = parsed.feedback;
      const question = parsed.question;

      const feedbackMessage: Message = {
        role: "ai",
        type: "feedback",
        content: feedback,
      };

      setMessages((prev) => [...prev, feedbackMessage]);

      setTimeout(() => {
        const questionMessage: Message = {
          role: "ai",
          type: "question",
          content: question,
        };

        setMessages((prev) => [...prev, questionMessage]);

        setQuestionCount((prev) => prev + 1);

        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Header */}
      <div className="border-b border-base-300 px-4 py-4 flex items-center justify-between backdrop-blur-sm">
        <div>
          <h2 className="font-bold text-lg">AI Mock Interview</h2>
          <p className="text-sm opacity-70">
            Practice technical interviews with AI
          </p>
        </div>

        {selectedCategory && (
          <div className="text-right">
            <div className="badge badge-primary badge-outline">
              {selectedCategory}
            </div>
            <p className="text-xs mt-1 opacity-70">
              Question {questionCount || 1}
            </p>
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 pb-8 space-y-4">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}

        {/* Category Selection */}
        {!selectedCategory && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => startInterview(category)}
                className="btn btn-outline hover:btn-primary transition-all duration-200 rounded-2xl"
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="chat chat-start">
            <div className="chat-bubble bg-base-200">
              <span className="loading loading-dots loading-sm"></span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input Box */}
      {selectedCategory && <InputBox onSend={handleSend} isTyping={isTyping} />}
    </div>
  );
}
