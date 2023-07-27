// DEPENDANCIES
import React, { useState } from "react";

export default function GameStart({handleStartGame}) {
  const [showCurrentStory, setShowCurrentStory] = useState(0);
  const [showCurrentOptions, setShowCurrentOptions] = useState(0);

  // STORY
  const storySteps = [
    "As the sun rises over the mythical land of Ethoria, two warriors awake at dawn, ready to embark on their epic journey. A mysterious presence beckons them, offering a choice that will shape their destinies. The fate of Ethoria rests in your hands. Will you be a valiant hero, a cunning rogue, or something entirely different? The time has come to make your decision.",
    "What weapons are you picking up? Choose 2",
    "What armour are you picking up? Choose 1",
    "What skills will you be using? Choose 3",
  ];

  const [selectedWeapon, setSelectedWeapon] = useState([]);
  const [selectedArmour, setSelectedArmour] = useState('');
  const [selectedSkill, setSelectedSkills] = useState([]);

// OPTIONS  
  const weaponSteps = [
    // LEADS TO ALARA
    "Sword and Shield",
    "Hammer",
    // LEADS TO NYX
    "Dual Daggers",
    "Staff",
  ];

  const armourSteps = [
    // LEADS TO ALARA
    "Heavy Armour",
    // LEADS TO NYX
    "Shadow Cloak"
  ];
  
  const skillsSteps = [
    // LEADS TO ALARA
    "Shield Wall",
    "Healing Aura",
    "Taunt",
    // LEADS TO NYX
    "Shadow Step",
    "Cursed Bolt",
    "Shadow Form",
  ];

  // SHOW NEXT BUTTON
  const handleNextButton = () => {
    setShowCurrentStory((prevStory) => prevStory + 1);
    setShowCurrentOptions((prevOptions) => prevOptions + 1);
  };

  // SHOW OPTIONS BUTTON
  const handleOptionsButton = () => {
    setShowCurrentOptions((prevOptions) => prevOptions + 1);
  };

  // LOGIC FOR CALCULATING PLAYER CHOICE

  //   2. When the questions start, I want the player to have an option to choose 2 for the weapon then the button to click next and move to the next question.
  // 3. When the next question starts, I want the player to have an option to choose only 1 armour then the button to click next to move onto the next question/
  // 4. For the final question, I want the player to have the open to choose only 3 skills, then the next button will display the classname gamestart__story--selected and then the button to start game -- which moves them into the game character component, either Nyx or Alara based on theri choices
  // 5. I want to implement some "what if" scenarios where if the player chooses more choices that lead to alara, then they will play as that character; or if the player chooses more choices as Nyx, then they will play as that character; otherwise, if the player chooses and equal amount of choices from Alara or Nyx, then there will be another thing that will say they can choose their own character. There will be two buttons to choose and there will be descriptions of the characters which is in the classname gamestart__character div. the buttons to choose the character will be linked to their respective components -- either Alara or Nyx. I have marked in comments which choices LEADS TO ALARA or LEADS TO NYX.

  return (
    <>
      <section className="gamestart">
        {/* DISPLAY INITAL GAME START STORY PARAGRAPH */}
        <p className="gamestart__story">
          {showCurrentStory < storySteps.length
            ? storySteps[showCurrentStory]
            : ""}
        </p>

        {/* DISPLAY NEXT BUTTON FOR STORY & QUESTION*/}
        {showCurrentStory < storySteps.length - 1 && (
          <button className="gamestart__next" onClick={handleNextButton}>
            Next
          </button>
        )}

        {/* WEAPONS */}
        {showCurrentStory === 1 &&
          weaponSteps.map((weapon, index) => {
            <button
              key={index}
              className="gamestart__option"
              onClick={() =>
                setSelectedWeapon((prevSelected) => [...prevSelected, weapon])
              }
            >
              {weapon}
            </button>;
          })}

    {/* ARMOUR */}
        {/* {showCurrentStory === 2 &&
          armourSteps.map((armour, index) => {
            <button
              key={index}
              className="gamestart__option"
              onClick={() =>
                setSelectedArmour((prevSelected) => [...prevSelected, armour])
              }
            >
              {armour}
            </button>;
          })} */}

        {/* SKILLS */}
        {/* {showCurrentStory === 3 &&
          skillsSteps.map((skill, index) => {
            <button
              key={index}
              className="gamestart__option"
              onClick={() =>
                setSelectedWeapon((prevSelected) => [...prevSelected, skill])
              }
            >
              {skill}
            </button>;
          })} */}

        {/* SHOW CHARACTER RESULT OR CHARACTER SELECTION */}



        {/* IF CHOICES CALCULATED ALARA > NYX OR ALARA < NYX */}
        {/* <p className="gamestart__story--selected">
          Based on your choices, your destiny begins to take shape. The mystical
          presence observes your decisions, and the scales tip in favor of
          either Alara, the Guardian, or Nyx, the Lost Cursebearer.
        </p> */}


        {/* IF EQUAL CHOICES PLAYER CHOOSES*/}
        {/* <p className="gamestart__story--selected">
          Based on your choices, your destiny begins to take shape. The mystical
          presence observes your decisions, and the scales tip in favor of
          either Alara, the Guardian, or Nyx, the Lost Cursebearer.
        </p> */}

        {/* TODO: CSS - Flex these side by side of each other with a divider */}
        {/* <div className="gamestart__character">
          <h1 className="gamestart__character-name">
            Nyx, The Lost Cursebearer
          </h1>
          <p className="gamestart__character-description">
            Nyx, shrouded in mystery and wielding the power of ancient curses,
            stands ready to embark on a perilous journey. Their dark armor,
            adorned with enigmatic symbols, offers enhanced protection against
            malevolent forces. In their hands, they wield a twin-bladed scythe
            that can cleave through enemies with swift precision. Their skills
            in dark magic grant them the ability to manipulate shadows, confuse
            adversaries, and harness the powers of the night to their advantage.
            Choose Nyx if you seek a path filled with arcane mysteries, stealth,
            and the allure of darkness.
          </p>
          <button className="gamestart__start">Choose Nyx</button>
        </div>

        <hr className="gamestart__divider" />

        <div className="gamestart__character">
          <h1 className="gamestart__character-name">
            Alara, The Cursed Guardian
          </h1>
          <p className="gamestart__character-description">
            Alara, a valiant and compassionate guardian, stands tall in her
            radiant armor, blessed by the divine spirits of Ethoria. Her armor
            reflects the purity of her heart, and its enchantments offer
            resilience against evil energies. In battle, she wields a gleaming,
            celestial shield that can deflect powerful attacks and a sacred
            sword imbued with the power of light. Her healing abilities can mend
            wounds and protect her allies in times of need. Choose Alara if you
            desire a path of protection, healing, and the honor of being a
            defender of the innocent.
          </p>
          <button className="gamestart__start">Choose Alara</button>
        </div> */}
      </section>
    </>
  );
}
