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

  // Check if data is still being fetched
  if (personalityTestData === null) {
    return <div>Loading...</div>;
  }

  // const currentScenario = personalityTestData[progress];

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

  if (characterSelection) {
    // CHARACTER SELECTION
    return (
      <div className="personalitytest">
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
      <div className="personalitytest">
        {/* <h2 className="personalitytest__title">Character Selection</h2> */}
        <p className="personalitytest__scenario">{currentScenario.text}</p>
        {/* TODO: Add handler to display the personality  */}
        <button className="personalitytest__next">Next</button>
        {/* TODO: DISPLAY AFTER CLICKING NEXT */}
        {personalityTestData?.map((choice, index) => (
          <>
            {choice?.choices &&
              choice?.choices?.map(({ text, trait }) => (
                <button
                  className="personalitytest__choice"
                  key={index}
                  onClick={() => handlePersonalityTest(choice.trait)}
                >
                  {text}
                </button>
              ))}
          </>
        ))}


      </div>
    );
  } else {
    // CANNOT DETERMINE STARTING CHARACTER
    return (
      <div className="personalitytest">
        <h2 className="personalitytest__title">Character Selection</h2>
        <p className="personalitytest__scenario">
          Personality Assessment: Based on your choices, your personality traits
          are evaluated.
        </p>
        <button
          className="personalitytest__startstory"
          onClick={() => handleCharacterSelection("")}
        >
          Choose Your Character
        </button>
      </div>
    );
  }
}
