import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#fff3e0] font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-Mochiy font-bold text-[#6495ED]">
          ConnectAI
        </h1>
        <p className="mt-2 text-sm tracking-extra-widest font-Mont tracking-widest text-[#003049]">
          A FRIEND FOR EVERY FEELING
        </p>

        <div className="mt-8 p-6 w-80 border-2 border-[#C1121F] rounded-lg shadow-md">
          <h2 className="text-2xl font-Mochiy font-bold text-[#C1121F] mb-4">
            Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="font-Mont w-full p-2 mb-4 placeholder-customPlaceholder border-b-2 border-[#C1121F] outline-none bg-transparent focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="font-Mont w-full p-2 mb-4 placeholder-customPlaceholder border-b-2 border-[#C1121F] outline-none bg-transparent focus:border-red-500"
          />
          <button
            onClick={handleContinue}
            className="w-full font-Mochiy py-2 mb-4 font-semibold text-[#C1121F] bg-transparent rounded border-2 border-[#C1121F] rounded-lg shadow-md"
          >
            Continue
          </button>
          <br />
          <br />
          <button className=" font-Comf flex items-center justify-center w-full py-2 text-[#003049] bg-gray-100 bg-transparent border-2 border-[#003049] rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 fill-current text-[#003049]"
              viewBox="0 0 48 48"
            >
              <path d="M44.5 20H24v8.5h11.8C33.5 32.2 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.7 0 5.1 1 6.9 2.6l6.3-6.3C33.2 6 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.3 0 19-8.3 19-20 0-1.3-.1-2.7-.5-4z" />
            </svg>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
