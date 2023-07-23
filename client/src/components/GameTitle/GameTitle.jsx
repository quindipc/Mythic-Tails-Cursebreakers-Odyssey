// DEPENDANCIES
import React, { useState } from "react";
import "./GameTitle.scss"


export default function GameTitle({onStartGame}) {
  const [showPlayButton, setShowPlayButton] = useState(true);

  let gameText = "Wecome to Mythic Tails: Cursebreaker's Odyssey";

  const handlePlayNow = () => {
    setShowPlayButton(false)
    onStartGame();
  }
  return (
    <div className="gametitle">
      <h1 className="gametitle__title">{gameText}</h1>
      {showPlayButton && <button className="gametitle__button" onClick={handlePlayNow}>Play Now</button>}
    </div>
  );
}