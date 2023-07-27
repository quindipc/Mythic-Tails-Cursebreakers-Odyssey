// DEPENDANCIES
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PersonalityTest.scss";

export default function PersonalityTest({ onComplete }) {
  // STATE
  const [characterSelection, setCharacterSelection] = useState(null);
  const [personalityTestData, setPersonalityTestData] = useState({});
  const [choicesA, setChoicesA] = useState(0);
  const [choicesB, setChoicesB] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  

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
  const handlePersonalityTest = () => {
    if (choicesA > choicesB) {
      setCharacterSelection("Alara, the Guardian");
    } else if (choicesA < choicesB) {
      setCharacterSelection("Nyx, the Lost Cursebearer");
    } else {
      setCharacterSelection(null);
    }
  };

  const handleCharacterSelection = (character) => {
    // TODO: change from console log
    console.log(
      `Congratulations! You will begin your adventure as ${character}.`,
    );
    onComplete();
  };
 
  if (characterSelection !== null) {
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
  } else if (personalityTestData.length > 0 && progress < personalityTestData.length) {
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
        <button onClick={() => setShowChoices(true)}>Start the test</button>

        {showChoices &&
          currentScenario?.choices?.map(({ option }, index) => (
            <button
              className="personalitytest__choice"
              key={index}
              onClick={() => handlePersonalityTest(option)}
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
        <p className="personalitytest__scenario">
          Personality Assessment: Based on your choices, your personality traits
          are evaluated.
        </p>
        <div className="personalitytest__equal-points">
          <h3>Your compassionate and pragmatic points are equal. Choose your own character:</h3>
          <button className="personalitytest__character-button" onClick={() => handleCharacterSelection("Alara, the Guardian")}>
            Alara, the Guardian
          </button>
          <button className="personalitytest__character-button" onClick={() => handleCharacterSelection("Nyx, the Lost Cursebearer")}>
            Nyx, the Lost Cursebearer
          </button>
        </div>
      </div>
    );
  }
}

  
PersonalityTest.propTypes = {
  onComplete: PropTypes.func.isRequired,
};