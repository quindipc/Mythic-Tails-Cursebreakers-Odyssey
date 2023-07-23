// Dependancies
import React, { useState, useEffect } from "react";
import "./GameWindow.scss";

// Components
// import Header from "../Header/Header"
import PersonalityTest from "../PersonalityTest/PersonalityTest";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";
import GameTitle from "../GameTitle/GameTitle";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import Footer from "../Footer/Footer";

export default function GameWindow() {
  // STATES
  const [progress, setProgress] = useState(0);
  // const [gameText, setGameText] = useState(
  //   "Wecome to Mythic Tails: Cursebreaker's Odyssey",
  // );
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [personalityData, setpersonalityData] = useState(null);

  // DARK MODE TOGGLE
  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  //  POINTS FOR PERSONALITY
  // const [compassionatePoints, setCompassionatePoints] = useState(0);
  // const [pragmaticPoints, setPragmaticPoints] = useState(0);
  // const [curiousPoints, setCuriousPoints] = useState(0);
  // const [ambitiousPoints, setAmbitiousPoints] = useState(0);
  // const [mysteriousPoints, setMysteriousPoints] = useState(0);
  // const [selfReliantPoints, setSelfReliantPoints] = useState(0);

  // PERSONALITY TEST - FETCH DATA
  // useEffect(() => {
  //   fetch("client/src/gamedata/personality-test.json")
  //     .then((resp) => resp.json())
  //     .then((data) => setpersonalityData(data))
  //     .catch((error) =>
  //       console.error("Cannot fetch personality test data", error),
  //     );
  // }, []);

  // if (!personalityData) {
  //   return <div className="game__loading">Loading...</div>;
  // }

  // PROGRESS STORY -- AFTER PERSONALITY TEST IS COMPLETED
  // const handleNext = () => {
  //   if (progress === 5) {
  //     // DETERMINE STARTING CHARACTER
  //     let startingCharacter;
  //     if (compassionatePoints > pragmaticPoints) {
  //       startingCharacter = "Alara, the Guardian";
  //     } else if (compassionatePoints < pragmaticPoints) {
  //       startingCharacter = "Nyx, the Lost Cursebearer";
  //     } else {
  //       // PLAYER CHOOSES IF EQUAL PERSONALITY
  //       return setProgress(6);
  //     }
  //     setGameText(
  //       `Congratulations! You will begin your adventure as ${startingCharacter} in the cursed land of Ethoria. Your choices will shape the fate of this world and the creatures within. Prepare for a thrilling journey ahead!`,
  //     );

  //     // TODO: Add in the game start
  //   } else {
  //     // CONTINUE THE STORY
  //     setProgress((prevProgress) => prevProgress + 1);
  //   }
  // };

  // PERSONALITY START GAME TEST
  const handlePersonality = (choice) => {
    const currentScenario = personalityData[progress];

    if (progress === 0) {
      setGameText(currentScenario.text);
      setProgress(1);
    } else if (progress === 1) {
      setGameText(currentScenario.text);
      if (choice === "Choice A") {
        setCompassionatePoints((prevPoints) => prevPoints + 1);
      } else if (choice === "Choice B") {
        setPragmaticPoints((prevPoints) => prevPoints + 1);
      }
      setProgress(2);
    } else if (progress === 2) {
      setGameText(currentScenario.text);
      if (choice === "Choice A") {
        setCuriousPoints((prevPoints) => prevPoints + 1);
      } else if (choice === "Choice B") {
        setAmbitiousPoints((prevPoints) => prevPoints + 1);
      }
      setProgress(3);
    } else if (progress === 3) {
      setGameText(currentScenario.text);
      if (choice === "Choice A") {
        setMysteriousPoints((prevPoints) => prevPoints + 1);
      } else if (choice === "Choice B") {
        setSelfReliantPoints((prevPoints) => prevPoints + 1);
      }
      setProgress(4);
    } else if (progress === 4) {
      setGameText(currentScenario.text);
      setProgress(5);
    }
  };

  // RENDER GAME BASED ON PROGRESS
  // if (progress === 6) {
  //   // PERSONALITY TEST COMPLETED
  //   return (
  //     <div className="game__personality-test">
  //       <PersonalityTest onComplete={handleNext} />
  //     </div>
  //   );
  // } else {
  //   const currentScenario = personalityData[progress];

  //   
  
  return (
    <div className={`game ${isDarkMode ? "game__dark" : ""}`}>
      {/* Dark Mode */}
      <DarkModeToggle isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />

      {/* Game Title */}
      <GameTitle progress={progress} />

      {/* Render different sections based on progress */}
      {progress === 0 && <PersonalityTest onComplete={handlePersonality} />}
      {progress === 1 && <Alara />}
      {progress === 2 && <Nyx />}
      {/* Add more sections as the game progresses */}
    </div>
  );
}