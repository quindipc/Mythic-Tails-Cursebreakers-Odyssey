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
      {/* Render the Header component */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play-game" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogOutPage />} />

        {/* <Route path="/about" element={} />
        <Route path="/profile/:id" element={} />
        <Route path="/creature-list/:id" element={} />
        <Route path="/creature-details/:id" element={} />
        <Route path="/creature-management/:id" element={} />
        <Route path="/contact" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
