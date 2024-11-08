import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AICompanion from "../assets/AICompanion.svg";
import SmartStrangerConnect from "../assets/SmartStrangerConnect.svg";

const HomePage = () => {
  const navigate = useNavigate();
  const [aiCompanionBg, setAiCompanionBg] = useState("#fdf0d5");

  const handleAICompanionClick = () => {
    setAiCompanionBg("#ffffff");

    setTimeout(() => {
      navigate("/AICompanion");
    }, 100);
  };

  return (
    <div className="bg-[#fdf0d5] min-h-screen font-Mochiy">
      {/* Navbar */}
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

      {/* Main Content */}
      <div className="flex flex-col items-space-around pr-5 ps-5 mt-5 w-full">
        <div className="grid grid-cols-2 gap-5">
          {/* Card 1 - AI Companion */}
          <div
            className="flex flex-col items-center justify-center p-8 w-full h-[25rem] rounded-lg shadow-2xl cursor-pointer"
            style={{ backgroundColor: aiCompanionBg }}
            onClick={handleAICompanionClick}
          >
            <img
              src={AICompanion}
              alt="AI Companion"
              className="w-40 h-40 mb-6"
            />
            <p className="text-2xl tracking-normal-wide font-semibold text-[#C1121F]">
              AI Companion
            </p>
          </div>

          {/* Card 2 - Safe Stranger Connect */}
          <div className="flex flex-col items-center justify-center p-8 w-full h-[25rem] bg-[#fdf0d5] rounded-lg shadow-2xl">
            <img
              src={SmartStrangerConnect}
              alt="Smart Stranger Connect"
              className="w-40 h-40 mb-6"
            />
            <p className="text-2xl font-semibold tracking-normal-wide text-center text-[#C1121F]">
              Smart Stranger <br /> Connect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
