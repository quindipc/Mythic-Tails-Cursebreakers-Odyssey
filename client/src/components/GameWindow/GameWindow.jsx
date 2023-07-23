// DEPENDANCIES
import React, { useState } from "react";

// COMPONENTS
import PersonalityTest from "../PersonalityTest/PersonalityTest";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";
import GameTitle from "../GameTitle/GameTitle";

export default function GameWindow() {
  const [progress, setProgress] = useState(0);
  const [showPersonalityTest, setShowPersonalityTest] = useState(false);

  // STARTING CHARACTER TRAIT POINTS
  const handlePersonalityTestComplete = () => {
    setProgress(1); // Progress to the next section after personality test completion
  };

  const handleStartGame = () => {
    setShowPersonalityTest(true); // Show the PersonalityTest component
  };

  return (
    <div className="game">
    {progress === 0 && !showPersonalityTest ? (
      <GameTitle onStartGame={handleStartGame} />
    ) : progress === 0 && showPersonalityTest ? (
      <PersonalityTest
        onComplete={handlePersonalityTestComplete}
      />
    ) : progress === 1 ? (
      <Alara />
    ) : progress === 2 ? (
      <Nyx />
    ) : null}
  </div>
);
}
