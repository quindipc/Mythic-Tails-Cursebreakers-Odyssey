// DEPENDANCIES
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PersonalityTest.scss";

export default function PersonalityTest({ onComplete }) {
  // STATE
  const [compassionatePoints, setCompassionatePoints] = useState(0);
  const [pragmaticPoints, setPragmaticPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const [characterSelection, setCharacterSelection] = useState(null);
  const [personalityTestData, setPersonalityTestData] = useState({});
  const [showChoices, setShowChoices] = useState(false);

  PersonalityTest.propTypes = {
    onComplete: PropTypes.func.isRequired,
  };

  // PERSONALITY TEST DATA
  useEffect(() => {
    fetch("/gamedata/personality-test.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonalityTestData(data);
      })
      .catch((error) =>
        console.error("Error fetching personality test data:", error),
      );
  }, []);

  // CHECK IF DATA FETCHED
  if (personalityTestData === null) {
    return <div>Loading...</div>;
  }

  // SETTING THE POINTS FOR THE TEST
  const handlePersonalityTest = (trait) => {
    if (trait === "Compassionate") {
      setCompassionatePoints((prevPoints) => prevPoints + 1);
    } else if (trait === "Pragmatic") {
      setPragmaticPoints((prevPoints) => prevPoints + 1);
    }
    if (progress === personalityTestData.length - 2) {
      // COMPLETE TEST IF THE LAST SCENARIO
      handlePersonalityTestComplete();
    } else {
      setProgress((prevProgress) => prevProgress + 1); // MOVE ON
    }
    setShowChoices(true);
  };

  const handlePersonalityTestComplete = () => {
    // PERSONALITY TEST ASSESMENT
    const traits = ["Compassionate", "Pragmatic"];
    const points = [compassionatePoints, pragmaticPoints];

    // DETERMINE CHARACTER
    let startingCharacter;
    if (compassionatePoints > pragmaticPoints) {
      startingCharacter = "Alara, the Guardian";
    } else if (compassionatePoints < pragmaticPoints) {
      startingCharacter = "Nyx, the Lost Cursebearer";
    } else {
      // EQUAL POINTS -- PLAYER CHOOSES
      setCharacterSelection(null);
      return;
    }

    // UPDATE CHARACTER SELECTION
    setCharacterSelection(startingCharacter);
  };

  const handleCharacterSelection = (character) => {
    // TODO: change from console log
    console.log(
      `Congratulations! You will begin your adventure as ${character}.`,
    );
    onComplete();
  };


  // TODO: this should not be here, it is already displayed below
  if (handlePersonalityTestComplete) {
    // CHARACTER SELECTION -- only shown if player got equal points
    return (
      <div className="personalitytest--characterselect">
        <h2 className="personalitytest__title">Choose Your Character</h2>
        <button
          className="personalitytest__startstory"
          onClick={() => handleCharacterSelection(characterSelection)}
        >
          Choose {characterSelection}
        </button>
      </div>
    );
  } else if (
    personalityTestData.length > 0 &&
    progress < personalityTestData.length
  ) {
    // PERSONALITY TEST
    const currentScenario = personalityTestData[progress];
    return (
      <div className="personalitytest--test">
        <p className="personalitytest__scenario">
          Welcome to the cursed land of Ethoria, where malevolent forces have
          plagued the once-thriving realm. Your choices will shape the path
          ahead, determining whether you'll embark on this journey as the
          compassionate Guardian Alara or the enigmatic Lost Cursebearer, Nyx.
        </p>
        <button>Start the test</button>

        {/* TODO: Show choices is not working?  */}
        {showChoices &&
          currentScenario?.choices?.map(({ option, trait }, index) => (
            <button
              className="personalitytest__choice"
              key={index}
              onClick={() => handlePersonalityTest(trait)}
            >
              {option}
            </button>
          ))}
      </div>
    );
  } else {
    // CANNOT DETERMINE STARTING CHARACTER -- runs if player gets equal choices
    return (
      <div className="personalitytest--characterselection-choice">
        <h2 className="personalitytest__title">Character Selection</h2>
        {/* TODO: This is where the personality test results should show up, and there should be a button to start the main story for the specific character. */}
        <p className="personalitytest__scenario">
          Personality Assessment: Based on your choices, your personality traits
          are evaluated.
        </p>
        {/* TODO: if the player made equal points to the traits, then they can choose their own character instead and there should be buttons to click into either alara or nyx, then after a character is clicked, then there should be the button to start the main story for that specific character */}
        <div className="personalitytest__equal-points">
          <h3>
            Your compassionate and pragmatic points are equal. Choose your own
            character:
          </h3>
          <button
            className="personalitytest__character-button"
            onClick={() => handleCharacterSelection("Alara, the Guardian")}
          >
            Alara, the Guardian
          </button>
          <button
            className="personalitytest__character-button"
            onClick={() =>
              handleCharacterSelection("Nyx, the Lost Cursebearer")
            }
          >
            Nyx, the Lost Cursebearer
          </button>
        </div>
      </div>
    );
  }
}
