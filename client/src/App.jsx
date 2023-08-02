// Dependancies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Components
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play-game" element={<GamePage />} />
        <Route path="/select-character" element={<GamePage />} />
        <Route path="/nyx" element={<GamePage />} />
        <Route path="/alara" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
