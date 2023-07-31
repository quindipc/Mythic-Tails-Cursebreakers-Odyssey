// DEPENDENCIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Nyx.scss"

// TODO: NEED TO REFACTOR

// ASSETS
import buttonSound from "../../assets/music/button-sound.wav"

export default function Nyx() {
  const NYX_URL = "http://localhost:8080/api/nyx/";
  const [currentStory, setCurrentStory] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(1);
  const [showScenario, setShowScenario] = useState([]);
  const [showChoices, setShowChoices] = useState([]);
  const [showEnding, setShowEnding] = useState([]);
  const [showSingleEnding, setShowSingleEnding] = useState({});
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [choiceSelected, setChoiceSelected] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    loadProgress();
  }, [])

  useEffect(() => {
    // FETCH NYX'S SCENARIOS http://localhost:8080/api/nyx/nyx_scenarios
    axios
      .get(`${NYX_URL}/nyx_scenarios`)
      .then((response) => {
        setShowScenario(response.data);
        console.log("ALL SCENARIOS", response.data);
      })
      .catch((error) => {
        console.error("Error fetching scenarios:", error);
      });
  }, []);0

  useEffect(() => {
    // FETCH NYX'S ENDINGS http://localhost:8080/api/nyx/nyx_endings
    axios
      .get(`${NYX_URL}/nyx_endings`)
      .then((response) => {
        setShowEnding(response.data);
        console.log("ALL ENDINGS", response.data);
      })
      .catch((error) => {
        console.error("Error fetching endings:", error);
      });
  }, []);

  useEffect(() => {
    // FETCH NYX CHOICES http://localhost:8080/api/nyx/nyx_choices
    axios
      .get(`${NYX_URL}/nyx_choices`)
      .then((response) => {
        setShowChoices(response.data);
        console.log("ALL CHOICES", response.data);
      })
      .catch((error) => {
        console.error("Error fetching choices:", error);
      });
  }, []);

  // INITIAL STORY LINE
  const storySteps = [
    "In the heart of Ethoria's cursed lands, where once-thriving forests had withered, and the creatures suffer under the malevolence of the sorceress Aveline's curse, Nyx emerges as an enigmatic being. Unbeknownst to Nyx, they possess an innate ability to wield dark magic, tapping into the suffering of the cursed creatures and channeling it into formidable power. Guided by cryptic whispers and haunting visions, Nyx finds themselves inexorably drawn towards a mysterious artifact known as the 'Tear of Radiance.'",
    "Rumors and legends whisper that the Tear of Radiance holds the power to break even the most potent enchantments and lift curses from the land. Nyx believes that obtaining this artifact will hold the key to their true purpose and identity. The visions they experience show them an elusive figure, the sorceress Aveline, who is both the source of the curse and a reflection of Nyx's dark abilities.",
    "Guided by cryptic whispers and haunting visions, Nyx embarked on a relentless pursuit of the Tear of Radiance, which was rumored to be hidden within the ruins of an ancient village long abandoned by civilization. As they approached the ghostly village, Nyx stumbled upon a pitiful sight - a cursed creature, its eyes filled with terror.",
  ];

  // ENDING DEMO
  const endingSteps = [
    "Congratulations on completing the demo of 'Mythic Tails: Cursebreaker's Odyssey'! You've experienced the captivating journeys of both Alara, the chosen guardian of nature, and Nyx, the enigmatic Cursebearer. Their paths are intertwined, and their destinies hang in the balance as they navigate the treacherous landscapes of Ethoria.",
    "This demo only scratches the surface of the epic adventure that awaits. The full game will unravel even more mysteries, and the choices you make will carry far-reaching consequences. We hope you enjoyed this glimpse into the world of 'Mythic Tails: Cursebreaker's Odyssey. Keep an eye out for the official release, where you can continue the saga and shape the destinies of Alara and Nyx. Thank you for playing!",
  ];

  // SHOW NEXT BUTTON
  const handleNextButton = () => {
    setCurrentStory((prevStory) => prevStory + 1);
  };

  // SHOW NEXT SCENARIO, UPDATE SCENARIO, AND SHOW ENDINGS
  useEffect(() => {
    const selectedChoice = showChoices.find(
      (choice) => choice.nyx_choice_id === selectedChoiceId,
    );
    if (selectedChoice) {
      // If the selected choice is linked to another scenario, it will update the current scenario to the new scenario
      if (selectedChoice.nyx_next_scenario_id) {
        setCurrentScenario(selectedChoice.nyx_next_scenario_id);
        setShowSingleEnding(null);
        setIsEnding(false);
        // If the selected choice is linked to an ending, it will update the current scenario to an ending
      } else if (selectedChoice.nyx_linked_ending_id) {
        const selectedEnding = showEnding.find(
          (ending) =>
            ending.nyx_ending_id === selectedChoice.nyx_linked_ending_id,
        );
        setShowSingleEnding(selectedEnding);
        setCurrentScenario(undefined);
        setIsEnding(true);
      }
    }
  }, [
    currentScenario,
    selectedChoiceId,
    showChoices,
    showEnding,
    showSingleEnding,
  ]);
  
  const buttonAudio = new Audio(buttonSound);

  // CHOICE HANDLER
  const handleChoiceSelect = (choiceId) => {
    setSelectedChoiceId(choiceId);
    setChoiceSelected(true);
    saveProgress();
    buttonAudio.play();
  };

  const handleRestart = () => {
    setCurrentStory(0); // Reset the current story to the beginning
    setCurrentScenario(1); // Reset the current scenario to the beginning
    setSelectedChoiceId(null); // Reset the selected choice ID
    setChoiceSelected(false); // Reset the choice selected state
    setIsEnding(false); // Reset the isEnding state
    setShowCredits(false); // Hide the credits
  };

  const handleEndOfDemo = () => {
    setIsEnding(false);
    setShowCredits(!showCredits);
  };

  const saveProgress = () => {
    const progress = {
      currentStory,
      currentScenario,
      selectedChoiceId,
      choiceSelected,
      isEnding,
      showCredits,
    };
    localStorage.setItem("nyxProgress", JSON.stringify(progress));
  };

  const loadProgress = () => {
    const progress = JSON.parse(localStorage.getItem("nyxProgress"));
    if (progress) {
      setCurrentStory(progress.currentStory);
      setCurrentScenario(progress.currentScenario);
      setSelectedChoiceId(progress.selectedChoiceId);
      setChoiceSelected(progress.choiceSelected);
      setIsEnding(progress.isEnding);
      setShowCredits(progress.showCredits);
    }
  };
  
  const clearProgress = () => {
    localStorage.removeItem("nyxProgress");
  };

return (
  <section className="nyx">
    {/* DISPLAY INITIAL STORY PARAGRAPHS */}
    <p className="nyx__prologue">
        {currentStory < storySteps.length ? storySteps[currentStory] : ""}
      </p>

    {/* DISPLAY ADDITIONAL STORY IF APPLICABLE*/}
    {choiceSelected && (
      <>
        {currentScenario > 0 && (
          <p className="nyx__additional_story">
            {currentScenario <= showScenario.length
              ? showScenario[currentScenario - 1].nyx_additional_story
              : ""}
          </p>
        )}

        {currentScenario === 0 && (
          <div className="nyx__ending">
            <h2 className="nyx__ending-name">{showSingleEnding.nyx_name}</h2>
            <p className="nyx__ending-scenario">{showSingleEnding.nyx_story}</p>
            {/* This may be removed */}
            <button onClick={handleRestart}>Play again</button>
          </div>
        )}
      </>
    )}

    {/* DISPLAY SCENARIO AND CHOICES AFTER PROLOGUE */}
    {currentStory >= storySteps.length && (
      <>
        {/* CURRENT SCENARIO */}
        <h2 className="nyx__scenario-name">
          {currentScenario <= showScenario.length
            ? showScenario[currentScenario - 1].nyx_name
            : ""}
        </h2>
        <p className="nyx__scenario">
          {currentScenario <= showScenario.length
            ? showScenario[currentScenario - 1].nyx_story
            : ""}
        </p>

        {/* DISPLAY CHOICES FOR CURRENT SCENARIO */}
        <div className="nyx__choices">
          {showChoices.map((choice) =>
            choice.nyx_linked_scenario_id === currentScenario ? (
              <button
                key={choice.nyx_choice_id}
                onClick={() => handleChoiceSelect(choice.nyx_choice_id)}
                className={`nyx__choice ${
                  selectedChoiceId === choice.nyx_choice_id ? "selected" : ""
                }`}
              >
                {choice.nyx_description}
              </button>
            ) : null,
          )}
        </div>
      </>
    )}

    {/* DISPLAY ENDING IF CHOICES LEAD TO ENDING */}
    {isEnding && (
      <div className="nyx__ending">
        <h2>{showSingleEnding.nyx_name}</h2>
        <p>{showSingleEnding.nyx_story}</p>
        <button onClick={handleEndOfDemo}>Credits</button>
        <button onClick={handleRestart}>Play Again</button>
      </div>
    )}

    {/* DISPLAY CREDITS */}
    {showCredits && (
      <div className="nyx__credits">
        <h2>Credits</h2>
        {endingSteps.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
        <button onClick={handleRestart}>Play Again</button>
      </div>
    )}

    {/* DISPLAY NEXT BUTTON ONLY FOR PROLOGUE STORY LINES -- REMOVE WHEN SCENARIO APPEAR*/}
    {currentStory < storySteps.length && currentScenario !== 0 && (
      <button className="nyx__next" onClick={handleNextButton}>
        Next
      </button>
    )}
  </section>
);
}
