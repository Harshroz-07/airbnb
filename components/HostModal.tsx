"use client";

import React, { useState, useEffect } from "react";
import { X, Award, ShieldCheck, Clock, MessageSquare, Send, CheckCheck } from "lucide-react";

interface HostModalProps {
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
    responseRate: string;
    responseTime: string;
    yearsHosting: number;
    coHosts?: Array<{ name: string; avatar: string }>;
  };
  onClose: () => void;
}

interface Message {
  id: string;
  sender: "user" | "host";
  text: string;
  time: string;
}

export const HostModal: React.FC<HostModalProps> = ({ host, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "host",
      text: `Hi there! I'm ${host.name}. Feel free to ask any questions about Mirashya UG10 or your upcoming stay in Candolim!`,
      time: "14:30"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    // Simulate instant reply from Host
    setTimeout(() => {
      const hostReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "host",
        text: `Thanks for reaching out! The Jacuzzi is fully heated and set up for private relaxation. Let me know if you need anything else!`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, hostReply]);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="max-w-[850px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close host modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-base text-gray-900">Host Profile & Chat</h2>
          <div className="w-9" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          {/* Left Column (Host Bio & Stats) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 text-center space-y-3">
              <img
                src={host.avatar}
                alt={host.name}
                className="w-24 h-24 rounded-full object-cover mx-auto shadow-md ring-4 ring-white"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{host.name}</h3>
                <p className="text-xs font-semibold text-[#FF385C] flex items-center justify-center gap-1 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Superhost</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200 text-xs">
                <div>
                  <div className="font-bold text-gray-900">{host.yearsHosting} Years</div>
                  <div className="text-gray-500">Hosting</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{host.responseRate}</div>
                  <div className="text-gray-500">Response rate</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Responds {host.responseTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Identity verified</span>
              </div>
            </div>
          </div>

          {/* Right Column (Live Message Chat Drawer) */}
          <div className="lg:col-span-7 flex flex-col h-[400px] border border-gray-200 rounded-3xl overflow-hidden bg-gray-50">
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#FF385C]" />
              <span className="font-bold text-sm text-gray-900">Chat with {host.name}</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${
                      msg.sender === "user"
                        ? "bg-black text-white rounded-br-none"
                        : "bg-white text-gray-900 border border-gray-200 shadow-2xs rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
              <input
                type="text"
                placeholder={`Message ${host.name}...`}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-gray-100 border border-transparent focus:border-black rounded-full px-4 py-2 text-xs text-gray-900 focus:outline-none transition"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-[#FF385C] hover:bg-[#E00B41] disabled:opacity-40 text-white p-2 rounded-full transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
