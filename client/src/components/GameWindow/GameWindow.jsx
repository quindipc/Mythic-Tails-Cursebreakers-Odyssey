import React, { useState, useEffect, useRef } from "react";
import "./GameWindow.scss";

// COMPONENTS
import GameTitle from "../GameTitle/GameTitle";
import GameStart from "../GameStart/GameStart";
import Alara from "../Alara/Alara";
import Nyx from "../Nyx/Nyx";

// ASSETS
import song from "../../assets/music/floating-cat.mp3";
import buttonSound from "../../assets/music/button-sound.wav"

export default function GameWindow() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGameStart, setShowGameStart] = useState(false);
  const [chosenCharacter, setChosenCharacter] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // DARK MODE
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // GAME START
  const handleStartGame = () => {
    setShowGameStart(true);
    buttonAudio.play();
  };

  // CHARACTER SELECTION
  const handleCharacterSelection = (character) => {
    setChosenCharacter(character);
    buttonAudio.play();
  };

  // MUSIC
  const [audioReady, setAudioReady] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

 useEffect(() => {
    const audioElement = new Audio(song);
    audioElement.loop = true;

    // Event handler to set audioReady when the audio is ready to play
    const handleAudioReady = () => {
      setAudioReady(true);
    };

    // Add the event listener for the canplaythrough event
    audioElement.addEventListener("canplaythrough", handleAudioReady);

    // Set the audio element reference to be used for playing and pausing
    audioRef.current = audioElement;

    // Cleanup: Remove the event listener
    return () => {
      audioElement.removeEventListener("canplaythrough", handleAudioReady);
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  // Function to play the audio on user interaction
  const handlePlayAudio = () => {
    if (audioReady) {
      if (!audioPlaying) {
        audioRef.current.play().then(() => {
          setAudioPlaying(true);
        }).catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
        setAudioPlaying(false);
      }
    }
  };

  // BUTTON SOUND
  const buttonAudio = new Audio(buttonSound);

  return (
    <section className={`game ${darkMode ? "dark" : ""}`}>
      <div className={`game__toggle-container ${darkMode ? "game__dark" : ""}`}>
        <div className="game__actions">
        {/* Dark Mode Toggle */}
        <input
          type="checkbox"
          id="switch"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
        <label className="game__switch-label" htmlFor="switch">
          <div className="game__toggle"></div>
        </label>

        {/* Music Toggle */}
        <button className="game__audio"onClick={handlePlayAudio}>
        {audioPlaying ? "Pause Audio" : "Play Audio"}
      </button>
        </div>

        {!showGameStart && <GameTitle handleStartGame={handleStartGame} />}

        {showGameStart && !chosenCharacter && (
          <GameStart
            handleStartGame={handleStartGame}
            onCharacterSelect={handleCharacterSelection}
            isLoggedIn={isLoggedIn}
          />
        )}

        {chosenCharacter === "Nyx" && <Nyx />}
        {chosenCharacter === "Alara" && <Alara />}
      </div>
    </section>
  );
}
