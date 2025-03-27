"use client";
import React, { useState, useEffect, useRef } from "react";

const API_KEY = "AIzaSyDiYcZMVLMGA64aDOXeCX_LJKfvXjzzF5U";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([
        ...newMessages,
        { text: "Error connecting to AI service.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-4 text-green-600">🌾 Kisan Chatbot</h1>
      <div className="border rounded-lg shadow-lg p-4 bg-white flex flex-col flex-grow">
        <div className="h-96 overflow-y-auto space-y-2 p-2 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs text-sm md:text-base w-fit ${
                msg.sender === "user"
                  ? "bg-green-600 text-white self-end shadow-md"
                  : "bg-gray-300 text-black shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-500 animate-pulse self-center">Thinking...</p>}
          <div ref={chatEndRef} />
        </div>
      </div>
      <div className="flex gap-2 mt-3 p-3 bg-white border-t rounded-b-lg shadow-md">
        <input
          className="border rounded-full px-4 py-2 flex-grow focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-full disabled:opacity-50 flex items-center justify-center shadow-md"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chatbot;