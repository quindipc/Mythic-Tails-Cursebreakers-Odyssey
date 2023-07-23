// Dependancies
import React, { useState } from "react";
import "./GameWindow.scss";

// Components
import PersonalityTest from "../PersonalityTest/PersonalityTest";

const GameWindow = () => {
  // PROGRESS
  const [progress, setProgress] = useState(0);
  const [gameText, setGameText] = useState(
    "Wecome to Mythic Tails: Cursebreaker's Odyssey",
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DARK MODE TOGGLE
  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  //  POINTS FOR PERSONALITY
  const [compassionatePoints, setCompassionatePoints] = useState(0);
  const [pragmaticPoints, setPragmaticPoints] = useState(0);
  const [curiousPoints, setCuriousPoints] = useState(0);
  const [ambitiousPoints, setAmbitiousPoints] = useState(0);
  const [mysteriousPoints, setMysteriousPoints] = useState(0);
  const [selfReliantPoints, setSelfReliantPoints] = useState(0);

  // PERSONALITY START GAME TEST
  const handlePersonality = () => {
    if (progress === 0) {
      setGameText(
        "Welcome to the cursed land of Ethoria, where malevolent forces have plagued the once-thriving realm. Your choices will shape the path ahead, determining whether you'll embark on this journey as the compassionate Guardian Alara or the enigmatic Lost Cursebearer, Nyx.",
      );
      setProgess(1);
    } else if (progress === 1) {
      setGameText(
        "Scenario 1: The Wounded Creature As you traverse the cursed forest, you encounter a wounded creature crying out in pain.",
      );
      setProgess(2);
    } else if (progress === 2) {
      setGameText(`Choice A: Approach the creature with empathy, offering aid and healing.
      • Trait: Compassionate
      • Description: You show kindness and concern for others, even in dire circumstances.`);
      setGameText(`Choice B: Remain cautious and proceed with caution, unsure if the creature can be trusted.
      • Trait: Pragmatic
      • Description: You prioritize caution and practicality when faced with uncertain situations.`);
      setProgess(3)
    } else if (progress === 3) {
      setGameText(`Choice B: Remain cautious and proceed with caution, unsure if the creature can be trusted.
      • Trait: Pragmatic
      • Description: You prioritize caution and practicality when faced with uncertain situations.`);
      setProgess(4)
      setProgess(4)
    } else if (progress === 4) {
      setGameText(
        "Scenario 2: The Hidden Path You come across an ancient map that hints at a hidden path leading to a powerful artifact, but it's obscured by a complex puzzle.",
      );
      setProgess(5)

    } else if (progress === 5) {
      setGameText(`Choice A: Take the time to solve the puzzle, intrigued by the prospect of uncovering secrets and hidden knowledge.
      • Trait: Curious
      • Description: You have an insatiable thirst for knowledge and enjoy exploring mysteries.`);
      setGameText(`Choice B: Bypass the puzzle and continue on your journey, valuing progress over curiosity.
      • Trait: Ambitious
      • Description: You are focused on your end goal, willing to make sacrifices to achieve it.`);
      setProgess(6)

    } else if (progress === 6) {
      handleNext()
    } else {
      // END OF PERSONALITY TEST -- ENTER GAME NOW
    }
  };

  // PROGRESS STORY -- AFTER PERSONALITY TEST IS COMPLETED
  const handleNext = () => {
    if (progress === 5) {
      // DETERMINE STARTING CHARACTER
      let startingCharacter;
      if (compassionatePoints > pragmaticPoints) {
        startingCharacter = "Alara, the Guardian";
      } else if (compassionatePoints < pragmaticPoints) {
        startingCharacter = "Nyx, the Lost Cursebearer";
      } else {
        // PLAYER CHOOSES IF EQUAL PERSONALITY
        return setProgress(6);
      }
      setGameText(
        `Congratulations! You will begin your adventure as ${startingCharacter} in the cursed land of Ethoria. Your choices will shape the fate of this world and the creatures within. Prepare for a thrilling journey ahead!`,
      );

      // TODO: Add in the game start
    } else {
      // CONTINUE THE STORY
      setProgress((prevProgress) => prevProgress + 1);
    }
  };

  // RENDER GAME BASED ON PROGRESS
  if (progress === 6) {
    // PERSONALITY TEST COMPLETED
    return (
      <div className="game__personality-test">
        <PersonalityTest onComplete={handleNext} />
      </div>
    );
  } else {
    return (
      <div className={`game ${isDarkMode ? "game__dark" : ""}`}>
        {/* DARK MODE */}
        <div className="game__toggle-container">
          <input
            type="checkbox"
            id="switch"
            checked={isDarkMode}
            onChange={handleDarkMode}
          />
          <label className="game__switch-label" htmlFor="switch">
            <div className="game__toggle"></div>
          </label>
        </div>

        {/* GAME */}
        <h1 className="game__title">{gameText}</h1>
        <div className="game__options">
          {/* INITALIZE START GAME */}
          {progress === 0 && (
            <button className="game__choice" onClick={handlePersonality}>
              Play Now!
            </button>
          )}

          {/*  PERSONALITY CHOICES */}
          {progress === 6 && (
            <button className="game__choice">Choose Your Character</button>
          )}
          {progress < 6 && (
            <>
              <button className="game__choice" onClick={handleNext}>
                Next
              </button>
              <button
                className="game__choice"
                onClick={() => handlePersonality("Choice A")}
              >
                Choice A
              </button>
              <button
                className="game__choice"
                onClick={() => handlePersonality("Choice B")}
              >
                Choice B
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default GameWindow;
