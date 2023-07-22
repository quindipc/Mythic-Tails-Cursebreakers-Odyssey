// Dependancies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Assets
import "./styles/partials/_fonts.scss"


export default function App() {
  return (
      <BrowserRouter>
        {/* Render the Header component */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/play-game" element={} />
        <Route path="/about" element={} />
        <Route path="/login" element={} />
        <Route path="/profile/:id" element={} />
        <Route path="/creature-list/:id" element={} />
        <Route path="/creature-details/:id" element={} />
        <Route path="/creature-management/:id" element={} />
        <Route path="/contact" element={} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}
