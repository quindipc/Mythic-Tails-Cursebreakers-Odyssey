import React, { useState } from "react";

export default function Nyx() {
  const [currentStory, setCurrentStory] = useState(0);

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

  // TODO: USEEFFECT HERE TO CALL THE API FOR THE SCENARIOS & CHOICES

  return (
    <>
      <section className="alara">
        <h1 className="alara__title">Alara, The Cursed Guardian</h1>

        {/* DISPLAY STORY PARAGRAPHS */}
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