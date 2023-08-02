// DEPENDENCIES
import React from "react";
import "./Nyx.scss";
import dotenv from "dotenv";
dotenv.config();

// ASSETS
import NyxStoryComponent from "../StoryComponent/NyxStoryComponent";

export default function Nyx() {
  const REACT_APP_NYX_URL = process.env.REACT_APP_NYX_URL;

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
  } = NyxStoryComponent(REACT_APP_NYX_URL);

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
              <p className="nyx__ending-scenario">
                {showSingleEnding.nyx_story}
              </p>
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
