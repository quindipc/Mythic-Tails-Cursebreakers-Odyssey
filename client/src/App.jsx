// Dependancies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LogOutPage from "./pages/LogOutPage/LogOutPage";

// Components
import Header from "./components/Header/Header";

// Assets
import "./styles/partials/_fonts.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play-game" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogOutPage />} />
        {/* TODO: ADD A /CHARACTER-SELECT ROUTE */}
        {/* TODO: ADD A /NYX ROUTE */}
        {/* TODO: ADD A /ALARA ROUTE */}
      </Routes>
    </BrowserRouter>
  );
}
