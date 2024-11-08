// ChatInterface.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ChatInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedAvatar = location.state?.selectedAvatar || {
    name: "Default",
    src: "",
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <div className="bg-white w-full h-full flex flex-col">
      <div className="flex items-center p-4 bg-[#003049] text-white">
        <button
          onClick={() => navigate("/AICompanion")}
          className="text-lg font-bold mr-4"
        >
          ← Back
        </button>
        <img
          src={selectedAvatar.src}
          alt={`Avatar of ${selectedAvatar.name}`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-Mochiy font-bold">{selectedAvatar.name}</span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "user" ? "bg-[#C1121F] text-white" : "bg-gray-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-100 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg border-2 border-[#003049] focus:outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-[#C1121F] text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
