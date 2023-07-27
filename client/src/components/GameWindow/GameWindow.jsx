// DEPENDANCIES
import React, { useState } from "react";
import "./GameWindow.scss";

// COMPONENTS
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";

export default function GameWindow() {
  const [darkMode, setDarkMode] = useState(false);

  // DARK MODE
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`game ${darkMode ? "dark" : ""}`}>
      <div className={`game__toggle-container ${darkMode ? "game__dark" : ""}`}>
        {/* Dark Mode Toggle */}
        <input
          type="checkbox"
          id="switch"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
        <label className="game__switch-label" htmlFor="switch">
          <div className="game__toggle"></div>
        </label>

        {/* Game Title */}
        {/* <div className="game__gametitle">
          <h1 className="game__gametitle-title">
            Welcome to Mythic Tails: Cursebreaker's Odyssey
          </h1>
          <button className="game__gametitle-button" onClick={handleStartGame}>
            Play Now
          </button>
        </div> */}

        {/* <Alara /> */}

        {/* <Nyx /> */}
      </div>
    </div>
  );
}
