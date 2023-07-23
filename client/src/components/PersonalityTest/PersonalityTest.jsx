import React, { useState } from "react";

export default function PersonalityTest({ onComplete }) {
  // SET POINTS FOR PERSONALITY
  const [compassionatePoints, setCompassionatePoints] = useState(0);
  const [pragmaticPoints, setPragmaticPoints] = useState(0);
  const [curiousPoints, setCuriousPoints] = useState(0);
  const [ambitiousPoints, setAmbitiousPoints] = useState(0);
  const [mysteriousPoints, setMysteriousPoints] = useState(0);
  const [selfReliantPoints, setSelfReliantPoints] = useState(0);

  const handlePersonalityTest = (points, trait) => {
    switch (trait) {
      case "Compassionate":
        setCompassionatePoints((prevPoints) => prevPoints + points);
        break;
      case "Pragmatic":
        setPragmaticPoints((prevPoints) => prevPoints + points);
        break;
      case "Curious":
        setCuriousPoints((prevPoints) => prevPoints + points);
        break;
      case "Ambitious":
        setAmbitiousPoints((prevPoints) => prevPoints + points);
        break;
      case "Mysterious":
        setMysteriousPoints((prevPoints) => prevPoints + points);
        break;
      case "Self-reliant":
        setSelfReliantPoints((prevPoints) => prevPoints + points);
        break;
      default:
        break;
    }
    onComplete();
  };

  return (
    <div className="personalitytest">
      <h2>Personality Test</h2>
      <p>Scenario 1: ...</p>
      <button onClick={() => handlePersonalityTest(1, "Compassionate")}>Choice A</button>
      <button onClick={() => handlePersonalityTest(1, "Pragmatic")}>Choice B</button>
      {/* Add more questions and choices as needed */}
    </div>
  );
}
