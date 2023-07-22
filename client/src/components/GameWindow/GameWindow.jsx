// Dependancies
import React, { useState } from "react";
import "./GameWindow.scss";

const GameWindow = () => {
// PROGRESS
  const [progress, setProgess] = useState(0)
  const [gameText, setGameText] = useState("Wecome to Mythic Tails: Cursebreaker's Odyssey")

  const handleDarkMode = () => {
    const toggleContainer = document.querySelector(".game__toggle-container")
    toggleContainer.classList.toggle("dark");
  };

  return (
    <div className="game">
      <div className="game__toggle-container">
        <input type="checkbox"
          id="switch" onClick={handleDarkMode} />
        <label className="game__switch" htmlFor="switch"></label>
        <div className="game__toggle"></div>
      </div>
      <h1 className="game__title">{gameText}</h1>
  </div>
  )
}
export default GameWindow;
