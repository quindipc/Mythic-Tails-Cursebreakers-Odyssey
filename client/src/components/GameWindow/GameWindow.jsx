// DEPENDANCIES
import React, { useState } from "react";
import "./GameWindow.scss";

// COMPONENTS
import PersonalityTest from "../PersonalityTest/PersonalityTest";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";
import GameTitle from "../GameTitle/GameTitle";

export default function GameWindow() {
  const [progress, setProgress] = useState(0);
  const [showPersonalityTest, setShowPersonalityTest] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // STARTING CHARACTER TRAIT POINTS
  const handlePersonalityTestComplete = () => {
    setProgress(1); // Progress to the next section after the personality test completion
  };

  const handleStartGame = () => {
    setShowPersonalityTest(true); // Show the PersonalityTest component
  };

  // DARK MODE
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`game ${darkMode ? "dark" : ""}`}>
      <div
        className={`game__toggle-container ${
          darkMode ? "game__dark" : ""
        }`}
      >
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
        {progress === 0 && !showPersonalityTest ? (
          <div className="game__gametitle">
            <h1 className="game__gametitle-title">
              Welcome to Mythic Tails: Cursebreaker's Odyssey
            </h1>
            <button
              className="game__gametitle-button"
              onClick={handleStartGame}
            >
              Play Now
            </button>
          </div>
        ) : null}

        {/* Personality Test */}
        {progress === 0 && showPersonalityTest ? (
          <PersonalityTest onComplete={handlePersonalityTestComplete} />
        ) : null}

        {/* Alara */}
        {progress === 1 ? <Alara /> : null}

        {/* Nyx */}
        {progress === 2 ? <Nyx /> : null}
      </div>
    </div>
  );
}
