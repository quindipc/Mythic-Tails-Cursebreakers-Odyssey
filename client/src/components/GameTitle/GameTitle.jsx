// DEPENDANCIES
import React from "react";
import "./GameTitle.scss";


export default function GameTitle({handleStartGame}) {

  return (
    <div className="game__gametitle">
      <h1 className="game__gametitle--title">
        Welcome to Mythic Tails: Cursebreaker's Odyssey
      </h1>
      <button className="game__gametitle--button" onClick={handleStartGame}>
        Play Now
      </button>
    </div>
  );
}