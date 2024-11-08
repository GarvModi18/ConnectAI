import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AICompanion from "./components/AICompanion";
import HomePage from "./components/Homepage";
import ChatInterface from "./components/ChatInterface";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/AICompanion" element={<AICompanion />} />
        <Route path="/ChatInterface" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
