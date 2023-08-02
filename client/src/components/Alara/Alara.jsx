// DEPENDANCIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Alara.scss";

// TODO: NEED TO REFACTOR

// ASSETS
import AlaraStoryComponent from "../StoryComponent/AlaraStoryComponent";

export default function Alara() {
  const ALARA_URL = "http://localhost:8080/api/alara/";

  const {
    currentStory,
    currentScenario,
    showScenario,
    showChoices,
    showSingleEnding,
    selectedChoiceId,
    choiceSelected,
    isEnding,
    showCredits,
    handleNextButton,
    handleChoiceSelect,
    handleRestart,
    handleEndOfDemo,
  } = AlaraStoryComponent(ALARA_URL);

  // INITIAL STORY LINE
  const storySteps = [
    "In the realm of Ethoria, the once-vibrant forests have withered, and the lands lay desolate under an ominous dark sky. The creatures that once lived in harmony now suffer under an ancient curse cast by the sorceress, Aveline. Her desire for ultimate power had corrupted her heart, and the curse had spread like a deadly plague, engulfing every corner of the once-prosperous land.",
    "Among the survivors, a young guardian named Alara stands as the last glimmer of hope. Alara is chosen by the Spirit of Balance, a mystical entity that embodies the essence of nature and humanity's symbiotic connection. With her gift of communing with creatures and harnessing the latent magic of the land, Alara takes on the burden of breaking the curse and restoring Ethoria to its former glory.",
    "The Spirit of Balance guides Alara on her journey, appearing as a soft, glowing light that only she can see. As she ventures through the cursed forests, Alara encounters an ailing forest spirit named Elowen. The spirit's once-lustrous glow is now dim, and tears of despair fall like dew from its ethereal form.",
    "'Guardian,' Elowen whispers in a faint voice, 'the heart of the forest withers, and my brethren suffer. Only a special healing flower, the Radiant Bloom, hidden within the dangerous ruins of the forgotten temple, can mend our home. Please, save us.'",
  ];

  // ENDING DEMO
  const endingSteps = [
    "Congratulations on completing the demo of 'Mythic Tails: Cursebreaker's Odyssey'! You've experienced the captivating journeys of both Alara, the chosen guardian of nature, and Nyx, the enigmatic Cursebearer. Their paths are intertwined, and their destinies hang in the balance as they navigate the treacherous landscapes of Ethoria.",
    "This demo only scratches the surface of the epic adventure that awaits. The full game will unravel even more mysteries, and the choices you make will carry far-reaching consequences. We hope you enjoyed this glimpse into the world of 'Mythic Tails: Cursebreaker's Odyssey. Keep an eye out for the official release, where you can continue the saga and shape the destinies of Alara and Nyx. Thank you for playing!",
  ];

  return (
    <section className="alara">
      {/* DISPLAY INITIAL STORY PARAGRAPHS */}
      <p className="alara__prologue">
        {currentStory < storySteps.length ? storySteps[currentStory] : ""}
      </p>
      {/* DISPLAY ADDITIONAL STORY IF APPLICABLE*/}
      {choiceSelected && (
        <>
          {currentScenario > 0 && (
            <p className="alara__additional_story">
              {currentScenario <= showScenario.length
                ? showScenario[currentScenario - 1].alara_additional_story
                : ""}
            </p>
          )}

          {currentScenario === 0 && (
            <div className="alara__ending">
              <h2 className="alara__ending-name">
                {showSingleEnding.alara_name}
              </h2>
              <p className="alara__ending-scenario">{showSingleEnding.alara_story}</p>

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
          <h2 className="alara__scenario-name">
            {currentScenario <= showScenario.length
              ? showScenario[currentScenario - 1].alara_name
              : ""}
          </h2>
          <p className="alara__scenario">
            {currentScenario <= showScenario.length
              ? showScenario[currentScenario - 1].alara_story
              : ""}
          </p>

          {/* DISPLAY CHOICES FOR CURRENT SCENARIO */}
          <div className="alara__choices">
            {showChoices.map((choice) =>
              choice.alara_linked_scenario_id === currentScenario ? (
                <button
                  key={choice.alara_choice_id}
                  onClick={() => handleChoiceSelect(choice.alara_choice_id)}
                  className={`alara__choice ${
                    selectedChoiceId === choice.alara_choice_id
                      ? "selected"
                      : ""
                  }`}
                >
                  {choice.alara_description}
                </button>
              ) : null,
            )}
          </div>
        </>
      )}

      {/* DISPLAY ENDING IF CHOICES LEAD TO ENDING */}
      {isEnding && (
        <div className="alara__ending">
          <h2>{showSingleEnding.alara_name}</h2>
          <p>{showSingleEnding.alara_story}</p>
          <button onClick={handleEndOfDemo}>Credits</button>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}

      {/* DISPLAY CREDITS */}
      {showCredits && (
        <div className="alara__credits">
          <h2>Credits</h2>
          {endingSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}

      {/* DISPLAY NEXT BUTTON ONLY FOR PROLOGUE STORY LINES -- REMOVE WHEN SCENARIO APPEAR*/}
      {currentStory < storySteps.length && currentScenario !== 0 && (
        <button className="alara__next" onClick={handleNextButton}>
          Next
        </button>
      )}
    </section>
  );
}
