import ChatHeader from "@/components/chatbot/ChatHeader";
import ChatMessages from "@/components/chatbot/ChatMessages";
import ChatInput from "@/components/chatbot/ChatInput";
import ChatSidebar from "@/components/chatbot/ChatSidebar";

export default function ChatPage() {
  return (
    <div className="grid lg:grid-cols-4 gap-6">

      {/* Chat Area */}

      <div className="lg:col-span-3 bg-white rounded-2xl border shadow-sm flex flex-col">

        <ChatHeader />

        <ChatMessages />

        <ChatInput />

      </div>

      {/* Sidebar */}

      <ChatSidebar />

    </div>
  );
}