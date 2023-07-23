// DEPENDANCIES
import React, { useState } from "react";

// COMPONENTS
import PersonalityTest from "../PersonalityTest/PersonalityTest";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";

export default function GameWindow() {
  const [progress, setProgress] = useState(0);

  // STARTING CHARACTER TRAIT POINTS
  const handlePersonalityTestComplete = (traitPoints) => {
    const { Compassionate, Pragmatic, Curious, Ambitious, Mysterious, "Self-reliant": SelfReliant } = traitPoints;
    let startingCharacter;
    if (Compassionate > Pragmatic) {
      startingCharacter = "Alara, the Guardian";
    } else if (Compassionate < Pragmatic) {
      startingCharacter = "Nyx, the Lost Cursebearer";
    } else {
      // TODO: Make character choose
      startingCharacter = "???";
    }

  // START GAME
    setProgress(1);
    console.log(`Congratulations! You will begin your adventure as ${startingCharacter}.`);
  };

  return (
    <div className="game">
      {progress === 0 && <PersonalityTest onComplete={handlePersonalityTestComplete} />}
      {progress === 1 && <Alara />}
      {progress === 2 && <Nyx />}
      {/* Add more sections as the game progresses */}
    </div>
  );
}
