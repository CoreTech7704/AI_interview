type Message = {
  role: "user" | "ai";
  content: string;
  type?: "question" | "feedback" | "system";
};

export default function ChatBubble({ message }: { message: Message }) {
  // system message
  if (message.type === "system") {
    return (
      <div className="flex justify-center">
        <div className="badge badge-neutral p-4">{message.content}</div>
      </div>
    );
  }

  return (
    <div
      className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}
    >
      <div
        className={`chat-bubble ${message.type === "feedback" ? "chat-bubble-secondary" : ""}`}
      >
        {message.content}
      </div>
    </div>
  );
}
