// DEPENDANCIES
import React, { useState } from "react";
import "./GameWindow.scss";

// COMPONENTS
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
    // OnClick attached to the Play Now button
    // If player new --- Game Start component will open
    setShowGameStart(true);

    // If player is logged in -- it will start where they have left off
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

        {/* add use state show game start here */}
        <GameStart/>

        {/* <Alara /> */}

        {/* <Nyx /> */}
      </div>
    </div>
  );
}
