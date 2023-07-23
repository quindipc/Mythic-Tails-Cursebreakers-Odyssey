// DEPENDANCIES
import React, { useState } from "react";
import personalityTestData from "../../../public/gamedata/personality-test.json";

export default function PersonalityTest({ onComplete }) {
  // STATE
  const [personalityData, setPersonalityData] = useState(personalityTestData);
  const [traitPoints, setTraitPoints] = useState({});

  // SETTING THE POINTS FOR THE TEST
  const handlePersonalityTest = (points, trait) => {
    setTraitPoints((prevTraitPoints) => ({
      ...prevTraitPoints,
      [trait]: (prevTraitPoints[trait] || 0) + points,
    }));
  };

  // ASSIGN THE TRAIT POINTS FOR THE CHARACTER SELECTION
  const handleComplete = () => {
    onComplete(traitPoints);
  };

  const currentScenario = personalityData[1]; // START WITH THE FIRST SCENARIO

  return (
    <div className="personalitytest">
      <h2>Personality Test</h2>
      <p>{currentScenario.text}</p>
      {currentScenario.choices.map((choice, index) => (
        <button key={index} onClick={() => handlePersonalityTest(1, choice.trait)}>
          {choice.text}
        </button>
      ))}
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}
