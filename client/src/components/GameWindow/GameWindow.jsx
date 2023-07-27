// DEPENDANCIES
import React, { useState } from "react";
import "./GameWindow.scss";

// COMPONENTS
import GameTitle from "../GameTitle/GameTitle";
import GameStart from "../GameStart/GameStart";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";


export default function GameWindow() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGameStart, setShowGameStart] = useState(false);

  // DARK MODE
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // GAME START
  const handleStartGame = () => {
    setShowGameStart(true);

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

        {!showGameStart && <GameTitle handleStartGame={handleStartGame} />}

        {showGameStart && <GameStart handleStartGame={handleStartGame} />}

        {/* <Alara /> */}

        {/* <Nyx /> */}
      </div>
    </div>
  );
}
