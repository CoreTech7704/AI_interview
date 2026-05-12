type Message = {
  role: "user" | "ai";
  content: string;
};

export default function ChatBubble({ message }: { message: Message }) {
  return (
    <div
      className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}
    >
      <div className="chat-bubble">{message.content}</div>
    </div>
  );
}
