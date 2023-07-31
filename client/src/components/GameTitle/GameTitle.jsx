// DEPENDENCIES
import React from "react";
import "./GameTitle.scss";

// ASSETS
import MythicTails from "../../assets/images/logo/Mythic-Tails-Logo-Color.svg"

export default function GameTitle({handleStartGame}) {

  return (
    <div className="gametitle">
      <h1 className="gametitle__title">
        Welcome to Mythic Tails: Cursebreaker's Odyssey
      </h1>
      <img className="gametitle__image" src={MythicTails} alt="Mythic Tails Logo" />
      {/* TODO: CHANGE TO LINK "/CHARACTER-SELECT" */}
      <button className="gametitle__button" onClick={handleStartGame}>
        Play Now
      </button>
    </div>
  );
}