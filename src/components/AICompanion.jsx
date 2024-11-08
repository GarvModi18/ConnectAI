// AICompanion.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ashley from "../assets/images/Avatars/Ashley.png";
import Carl from "../assets/images/Avatars/Carl.png";
import Emily from "../assets/images/Avatars/Emily.png";
import John from "../assets/images/Avatars/John.png";
import Andy from "../assets/images/Avatars/Andy.png";
import Sofia from "../assets/images/Avatars/Sofia.png";

const avatars = [
  { name: "Ashley", src: Ashley },
  { name: "Carl", src: Carl },
  { name: "Emily", src: Emily },
  { name: "John", src: John },
  { name: "Andy", src: Andy },
  { name: "Sofia", src: Sofia },
];

const AICompanion = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleButtonSelect = (button) => {
    setSelectedButton(button);
    if (button === "Chat") {
      navigate("/ChatInterface", { state: { selectedAvatar } });
    }
  };

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-[#fdf0d5]">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-[#669bbc]">ConnectAI</h1>
          <span
            id="tagline"
            className="text-sm font-Mont tracking-widest text-[#003049]"
          >
            A FRIEND FOR EVERY FEELING
          </span>
        </div>
        <nav className="flex space-x-10 text-lg text-[#c1121f] font-Comf">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Data Privacy
          </a>
          <a href="#" className="hover:underline">
            Preferences
          </a>
          <a href="#" className="hover:underline">
            Profile
          </a>
        </nav>
      </header>
      <div className="bg-[#fdf0d5] min-h-screen flex flex-col items-center p-8 font-Mont">
        <h1 className="text-3xl font-Mochiy font-bold text-[#C1121F] mb-6">
          AI Companion
        </h1>

        <div className="flex space-x-4 mb-8">
          {["Chat", "Voice Call", "Video Call"].map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonSelect(button)}
              className={`px-6 py-2 font-Comf text-white rounded-lg shadow-md ${
                selectedButton === button ? "bg-[#e57373]" : "bg-[#C1121F]"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex space-x-10">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full cursor-pointer"
                onClick={() => handleAvatarSelect(avatar)}
              >
                <img
                  src={avatar.src}
                  alt={`Avatar ${avatar.name}`}
                  className={`w-40 h-40 mb-2 rounded-lg ${
                    selectedAvatar.name === avatar.name
                      ? "border-4 border-[#C1121F]"
                      : "border-2 border-[#C1121F]"
                  }`}
                />
                <span
                  className={`text-lg font-Comf text-[#C1121F] ${
                    selectedAvatar.name === avatar.name ? "font-bold" : ""
                  }`}
                >
                  {avatar.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center gap-5 mt-8">
          <div className="p-4 bg-white w-full h-full rounded-lg shadow-md">
            <h2 className="text-lg font-Mochiy font-bold text-[#C1121F] mb-2">
              Chat History
            </h2>
            <ul className="list-disc font-Comf list-inside text-m text-[#003049]">
              <li>Conversation with John Doe</li>
              <li>Discussed wellness tips</li>
              <li>Planning for upcoming event</li>
            </ul>
          </div>

          <div className="p-4 w-full h-full bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-Mochiy font-bold text-[#C1121F] mb-2">
              Favorite Topics
            </h2>
            <ul className="list-disc font-Comf list-inside text-m text-[#003049]">
              <li>Mental Wellness</li>
              <li>Daily Productivity</li>
              <li>Mindfulness Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICompanion;
