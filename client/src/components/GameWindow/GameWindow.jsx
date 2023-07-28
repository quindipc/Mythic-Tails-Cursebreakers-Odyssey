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
  const [chosenCharacter, setChosenCharacter] = useState(null);

  // DARK MODE
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // GAME START
  const handleStartGame = () => {
    setShowGameStart(true);
  };

  // CHARACTER SELECTION
  const handleCharacterSelection = (character) => {
    setChosenCharacter(character);
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

<<<<<<< HEAD
        {/* Game Title */}
        {/* <div className="game__gametitle">
          <h1 className="game__gametitle-title">
            Welcome to Mythic Tails: Cursebreaker's Odyssey
          </h1>
          <button className="game__gametitle-button" onClick={handleStartGame}>
            Play Now
          </button>
          <button className="game__gametitle-button" onClick={handleStartGame}>
            Continue Game
          </button>
        </div> */}
=======
        {!showGameStart && <GameTitle handleStartGame={handleStartGame} />}
>>>>>>> feature__story

        {showGameStart && !chosenCharacter && (
          <GameStart handleStartGame={handleStartGame} onCharacterSelect={handleCharacterSelection} />
        )}

        {chosenCharacter === "Nyx" && <Nyx />}
        {chosenCharacter === "Alara" && <Alara />}
      </div>
    </div>
  );
}
