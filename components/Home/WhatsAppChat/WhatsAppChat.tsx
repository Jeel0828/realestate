"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([
    {
      type: "bot",
      text: "Hello! 👋 Welcome to My Website. How can we help you today?",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "user", text: message }]);
      setMessage("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thanks for your inquiry! Our team will get back to you shortly. For immediate assistance, please call us at +91 9876543210 or visit us at the site office.",
          },
        ]);
      }, 1000);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919558599704?text=Hi%20I%20am%20interested%20in%20My%20Home",
      "_blank",
    );
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-rose-700 hover:bg-rose-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/10"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-40 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-96"
            >
              {/* Header */}
              <div className="bg-green-500 text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium font-serif tracking-wide text-lg">
                    My Website
                  </h3>
                  <p className="text-xs font-serif tracking-wide text-green-100">
                    Usually replies instantly
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white cursor-pointer hover:bg-green-600 p-1 rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === "user"
                          ? "bg-green-500 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <p
                        className="text-sm font-serif tracking-wide"
                        style={{ letterSpacing: "0.5px" }}
                      >
                        {msg.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t p-4 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 text-gray-800 font-serif border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    style={{ letterSpacing: "0.5px" }}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-green-500 cursor-pointer hover:bg-green-600 text-white rounded-full p-2 transition"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full cursor-pointer font-serif mt-2 text-xs bg-green-50 text-green-600 hover:bg-green-100 py-2 rounded-full transition font-medium "
                  style={{ letterSpacing: "0.5px" }}
                >
                  Chat on WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
