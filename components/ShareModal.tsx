"use client";

import React, { useState } from "react";
import { X, Copy, Check, Mail, MessageSquare, Send, Globe } from "lucide-react";

interface ShareModalProps {
  onClose: () => void;
  title: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ onClose, title }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://airbnb-clone-playpower.vercel.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700"
          aria-label="Close share dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-xl font-bold text-gray-900">Share this place</h3>
          <p className="text-sm text-[#717171] mt-1">{title}</p>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-xl bg-gray-50">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 bg-transparent text-xs text-gray-700 focus:outline-none px-2 truncate"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition flex items-center gap-1.5 shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy link</span>
              </>
            )}
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-800"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-800"
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <span>Email</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-800"
          >
            <Send className="w-5 h-5 text-sky-500" />
            <span>Messenger</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-800"
          >
            <Globe className="w-5 h-5 text-gray-700" />
            <span>Embed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
