// DEPENDANCIES
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Alara() {
  const ALARA_URL = "http://localhost:8080/api/alara/";
  const [currentStory, setCurrentStory] = useState(0);
  const [showScenario, setShowScenario] = useState([])
  const [showChoices, setShowChoices] = useState([])
  const [showEnding, setShowEnding] = useState([])

  // TODO: USEEFFECT HERE TO CALL THE API FOR THE SCENARIOS & CHOICES & ENDINGS
  useEffect(() => {
    // FETCH ALARA'S SCENARIOS http://localhost:8080/api/alara/alara_scenarios
    const fetchAlaraScenarios = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Alara's Scenario's:", error);
      }
    };

    // FETCH ALARA'S ENDINGS http://localhost:8080/api/alara/alara_endings
    const fetchAlaraEndings = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Alara's Endings's:", error);
      }
    };

    // FETCH ALARA'S CHOICES http://localhost:8080/api/alara/alara_choices
    const fetchAlaraChoices = async () => {
      try {
        // AXIOS CALL HERE
      } catch (error) {
        console.log("Error fetching Alara's Choices:", error);
      }
    };

    fetchAlaraScenarios();
    fetchAlaraEndings();
    fetchAlaraChoices();
  }, []);

  // INITAL STORY LINE
  const storySteps = [
    "In the realm of Ethoria, the once-vibrant forests have withered, and the lands lay desolate under an ominous dark sky. The creatures that once lived in harmony now suffer under an ancient curse cast by thesorceress, Aveline. Her desire for ultimate power had corrupted her heart, and the curse had spread like a deadly plague, engulfing every corner of the once-prosperous land.",
    "Among the survivors, a young guardian named Alara stands as the last glimmer of hope. Alara is chosen by the Spirit of Balance, a mystical entity that embodies the essence of nature and humanity's symbiotic connection. With her gift of communing with creatures and harnessing the latent magic of the land, Alara takes on the burden of breaking the curse and restoring Ethoria to its former glory.",
    "The Spirit of Balance guides Alara on her journey, appearing as a soft, glowing light that only she can see. As she ventures through the cursed forests, Alara encounters an ailing forest spirit named Elowen. The spirit's once-lustrous glow is now dim, and tears of despair fall like dew from its ethereal form.",
  ];

  // SHOW NEXT BUTTON
  const handleNextButton = () => {
    setCurrentStory((prevStory) => prevStory + 1);
  };

  return (
    <>
      <section className="alara">
        <h1 className="alara__title">Alara, The Cursed Guardian</h1>

        {/* DISPLAY INITIAL STORY PARAGRAPHS */}
        <p className="alara__prologue">
          {currentStory < storySteps.length ? storySteps[currentStory] : ""}
        </p>

        {/* DISPLAY NEXT BUTTON */}
        {currentStory < storySteps.length - 1 && (
          <button className="alara__next" onClick={handleNextButton}>
            Next
          </button>
        )}
      
        {/* TODO: START THE SCENARIOS WITH CHOICES */}
      </section>
    </>
  );
}
