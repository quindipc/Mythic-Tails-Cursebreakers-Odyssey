// Dependancies
import React, { useState } from "react";
import "./GameWindow.scss";

const GameWindow = () => {
  // PROGRESS
  const [progress, setProgess] = useState(0);
  const [gameText, setGameText] = useState(
    "Wecome to Mythic Tails: Cursebreaker's Odyssey",
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DARK MODE TOGGLE
  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`game ${isDarkMode ? "game__dark" : ""}`}>
      <div className="game__toggle-container">
        <input
          type="checkbox"
          id="switch"
          checked={isDarkMode}
          onChange={handleDarkMode}
        />
        <label className="game__switch-label" htmlFor="switch">
          <div className="game__toggle"></div>
        </label>
      </div>
      <h1 className="game__title">{gameText}</h1>
    </div>
  );
};
export default GameWindow;
