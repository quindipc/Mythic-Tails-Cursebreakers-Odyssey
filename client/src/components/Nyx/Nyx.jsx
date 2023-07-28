// DEPENDANCIES
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nyx() {
  const NYX_URL = "http://localhost:8080/api/nyx/";
  const [currentStory, setCurrentStory] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(1);
  const [showScenario, setShowScenario] = useState([]);
  const [showChoices, setShowChoices] = useState([]);
  const [showEnding, setShowEnding] = useState([]);
  const [showSingleEnding, setShowSingleEnding] = useState({});
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);

  useEffect(() => {
    // FETCH NYX'S SCENARIOS http://localhost:8080/api/nyx/nyx_scenarios
    axios
      .get(`${NYX_URL}/nyx_scenarios`)
      .then((response) => {
        setShowScenario(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scenarios:", error);
      });
  }, []);

  useEffect(() => {
    // FETCH NYX'S ENDINGS http://localhost:8080/api/nyx/nyx_endings
    axios
      .get(`${NYX_URL}/nyx_endings`)
      .then((response) => {
        setShowEnding(response.data);
        console.log(response.data);
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
        console.log(response.data);
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

  // SHOW NEXT BUTTON
  const handleNextButton = () => {
    setCurrentStory((prevStory) => prevStory + 1);
  };

  // CHOICE HANDLER
  const handleChoiceSelect = (choiceId) => {
    setSelectedChoiceId(choiceId);
  
    // Find the selected choice
    const selectedChoice = showChoices.find((choice) => choice.nyx_choice_id === choiceId);
  
    // Update the currentScenario state only if the selected choice is linked to a scenario
    if (selectedChoice && selectedChoice.nyx_linked_scenario_id) {
      setCurrentScenario(selectedChoice.nyx_linked_scenario_id);
    }
  };
  
  
  useEffect(() => {
    const selectedChoice = showChoices.find((choice) => choice.nyx_choice_id === selectedChoiceId);

    if (selectedChoice) {
      if (selectedChoice.nyx_linked_scenario_id) {
        setCurrentScenario(selectedChoice.nyx_linked_scenario_id);
      } else if (selectedChoice.nyx_linked_ending_id) {
        const selectedEnding = showEnding.find((ending) => ending.nyx_ending_id === selectedChoice.nyx_linked_ending_id);
        setShowSingleEnding(selectedEnding);
        setCurrentScenario(0);
      }
    }
  }, [selectedChoiceId, showChoices, showEnding]);
  

  const handleRestart = () => {
    setCurrentStory(0);
  };

  return (
    <>
      <section className="nyx">
        <h1 className="nyx__title">Nyx, The Cursed Guardian</h1>
  
        {/* DISPLAY INITAL STORY PARAGRAPHS */}
        <p className="nyx__prologue">
          {currentStory < storySteps.length ? storySteps[currentStory] : ""}
        </p>
  
        {/* DISPLAY SCENARIO AND CHOICES AFTER PROLOGUE */}
        {currentStory >= storySteps.length && (
          <>
            {/* CURRENT SCENARIO */}
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
                    className={`nyx__choice ${selectedChoiceId === choice.nyx_choice_id ? "selected" : ""}`}
                  >
                    {choice.nyx_description}
                  </button>
                ) : null
              )}
            </div>
          </>
        )}
  
        {/* DISPLAY ENDING IF CHOICES LEAD TO ENDING */}
        {currentStory > showScenario.length && (
          <div className="nyx__ending">
            <h2>{showSingleEnding.nyx_name}</h2>
            <p>{showSingleEnding.nyx_story}</p>
  
            {/* This may be removed */}
            <button onClick={handleRestart}>Play again</button>
          </div>
        )}
  
        {/* DISPLAY NEXT BUTTON AFTER SCENARIO AND CHOICES */}
        {currentScenario !== 0 && (
          <button className="nyx__next" onClick={handleNextButton}>
            Next
          </button>
        )}
      </section>
    </>
  );
}  