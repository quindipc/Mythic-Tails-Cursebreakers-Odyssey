// Dependancies
import React, { useState } from "react";
import "./GameWindow.scss";

export default function GameWindow() {
  const [gameText, setGameText] = useState(
    "Welcome to Mythic Tails: Cursebreaker's Odyssey.",
  );

  // GAME LOGIC
  const handleAction = (action) => {
    if (action === "look") {
      setGameText(
        "You are standing in a dark forest. There is a path to the east.",
      );
    } else if (action === "go east") {
      setGameText("You follow the path and arrive at a clearing.");
    } else if (action === "go west") {
      setGameText("You head west, but the dense trees block your way.");
    } else {
      setGameText("I don't understand that command.");
    }
  };

  return <div className="gamewindow">{gameText}
    
    <div className="gamewindow__options">
    <button className="gamewindow__choice" onClick={() => handleAction("look")}>Look</button>
        <button className="gamewindow__choice" onClick={() => handleAction("go east")}>Go East</button>
        <button className="gamewindow__choice" onClick={() => handleAction("go west")}>Go West</button>
    </div>
  </div>;
}
