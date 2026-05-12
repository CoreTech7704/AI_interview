"use client";

import { useState } from "react";

export default function InputBox({ onSend, isTyping }: { onSend: (text: string) => void; isTyping: boolean }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 border-t border-base-300 flex gap-2">
      
      <input
        disabled={isTyping}
        type="text"
        placeholder="Type your answer..."
        className="input input-bordered w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn btn-primary" disabled={isTyping} onClick={handleSend}>
        Send
      </button>

    </div>
  );
}