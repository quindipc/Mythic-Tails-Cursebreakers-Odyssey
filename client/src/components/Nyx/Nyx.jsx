// DEPENDANCIES
import React, { useState } from "react";
import axios from "axios";

export default function Nyx() {
  const NYX_URL = "http://localhost:8080/api/nyx/";
  const [currentStory, setCurrentStory] = useState(0);
  const [showScenario, setShowScenario] = useState([])
  const [showChoices, setShowChoices] = useState([])
  const [showEnding, setShowEnding] = useState([])

  // TODO: USEEFFECT HERE TO CALL THE API FOR THE SCENARIOS & CHOICES & ENDINGS
  useEffect(() => {
    // FETCH NYX'S SCENARIOS http://localhost:8080/api/nyx/nyx_scenarios
    const fetchNyxScenarios = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Nyx's Scenario's:", error);
      }
    };

    // FETCH NYX'S ENDINGS http://localhost:8080/api/nyx/nyx_endings
    const fetchNyxEndings = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Nyx's Endings's:", error);
      }
    };

    // FETCH NYX'S CHOICES http://localhost:8080/api/nyx/nyx_choices
    const fetchNyxChoices = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Nyx's Choices:", error);
      }
    };

  }, []);

  // INITAL STORY LINE
  const storySteps = [
    "In the realm of Ethoria, where darkness casts a shadow upon the land, a mysterious figure known as the Lost Cursebearer roams aimlessly. Veiled in obscurity, the Cursebearer is known as Nyx, a name whispered in hushed tones among the cursed inhabitants of the desolate realm. Nyx has long forgotten their true identity, plagued by visions that feel like fragmented memories from another life.",
    "In the heart of Ethoria's cursed lands, where once-thriving forests had withered, and the creatures suffer under the malevolence of the sorceress Aveline's curse, Nyx emerges as an enigmatic being. Unbeknownst to Nyx, they possess an innate ability to wield dark magic, tapping into the suffering of the cursed creatures and channeling it into formidable power. Guided by cryptic whispers and haunting visions, Nyx finds themselves inexorably drawn towards a mysterious artifact known as the 'Tear of Radiance.'",
    "Guided by cryptic whispers and haunting visions, Nyx embarked on a relentless pursuit of the Tear of Radiance, which was rumored to be hidden within the ruins of an ancient village long abandoned by civilization. As they approached the ghostly village, Nyx stumbled upon a pitiful sight - a cursed creature, its eyes filled with terror.",
  ];

  // SHOW NEXT BUTTON
  const handleNextButton = () => {
    setCurrentStory((prevStory) => prevStory + 1);
  };

  return (
    <>
      <section className="nyx">
        <h1 className="nyx__title">Nyx, The Cursed Guardian</h1>

        {/* DISPLAY INITAL STORY PARAGRAPHS */}
        <p className="nyx__prologue">
          {currentStory < storySteps.length ? storySteps[currentStory] : ""}
        </p>

        {/* DISPLAY NEXT BUTTON */}
        {currentStory < storySteps.length - 1 && (
          <button className="nyx__next" onClick={handleNextButton}>
            Next
          </button>
        )}

        {/* TODO: START THE SCENARIOS WITH CHOICES */}
      </section>
    </>
  );
}
