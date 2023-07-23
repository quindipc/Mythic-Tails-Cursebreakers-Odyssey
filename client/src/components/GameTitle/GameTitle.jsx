import React from "react";

export default function GameTitle() {
  let gameText = "Wecome to Mythic Tails: Cursebreaker's Odyssey";
  // Update gameText based on progress or other conditions

  return (
    <h1 className="game__title">{gameText}</h1>
  );
}