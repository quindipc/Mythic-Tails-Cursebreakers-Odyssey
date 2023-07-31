import React, { useState } from "react";
import "./GameStart.scss";

// ASSEETS
import Alara from "../../assets/images/characters/Alara.svg";
import Nyx from "../../assets/images/characters/Nyx.svg";

export default function GameStart({
  handleStartGame,
  onCharacterSelect
}) {
  const [chosenCharacter, setChosenCharacter] = useState(null);
  const [nyxSelected, setNyxSelected] = useState(false);
  const [alaraSelected, setAlaraSelected] = useState(false);

  const handleCharacterSelection = (character) => {
    setChosenCharacter(character);
    onCharacterSelect(character); // Pass the selected character back to the parent component
    setNyxSelected(character === "Nyx");
    setAlaraSelected(character === "Alara");
  };

  return (
    <>
      <section className="gamestart">
        {/* CHARACTER SELECTION */}
        {!nyxSelected && !alaraSelected && (
          <>
            <div className="gamestart__character">
              <h1 className="gamestart__name">Nyx, The Lost Cursebearer</h1>
              <div
                className="gamestart__container--dropdown"
                onClick={() => {
                  setNyxSelected((prevState) => !prevState);
                }}
              >
                <h2 className="gamestart__dropdown">Description</h2>
                {nyxSelected && (
                  <p className="gamestart__description">
                    Nyx, shrouded in mystery and wielding the power of ancient
                    curses, stands ready to embark on a perilous journey. Their
                    dark armor, adorned with enigmatic symbols, offers enhanced
                    protection against malevolent forces. In their hands, they wield
                    a twin-bladed scythe that can cleave through enemies with swift
                    precision. Their skills in dark magic grant them the ability to
                    manipulate shadows, confuse adversaries, and harness the powers
                    of the night to their advantage. Choose Nyx if you seek a path
                    filled with arcane mysteries, stealth, and the allure of
                    darkness.
                  </p>
                )}
              </div>
              <img className="gamestart__image" src={Nyx} alt="Nyx character" />
              <button
                className="gamestart__start"
                onClick={() => handleCharacterSelection("Nyx")}
              >
                Choose Nyx
              </button>
            </div>

            <hr className="gamestart__divider" />

            <div className="gamestart__character">
              <h1 className="gamestart__name">Alara, The Cursed Guardian</h1>
              <div
                className="gamestart__container--dropdown"
                onClick={() => {
                  setAlaraSelected((prevState) => !prevState);
                }}
              >
                <h2 className="gamestart__dropdown">Description</h2>
                {alaraSelected && (
                  <p className="gamestart__description">
                    Alara, a valiant and compassionate guardian, stands tall in her
                    radiant armor, blessed by the divine spirits of Ethoria. Her
                    armor reflects the purity of her heart, and its enchantments
                    offer resilience against evil energies. In battle, she wields a
                    gleaming, celestial shield that can deflect powerful attacks and
                    a sacred sword imbued with the power of light. Her healing
                    abilities can mend wounds and protect her allies in times of
                    need. Choose Alara if you desire a path of protection, healing,
                    and the honor of being a defender of the innocent.
                  </p>
                )}
              </div>
              <img
                className="gamestart__image"
                src={Alara}
                alt="Alara character"
              />
              <button
                className="gamestart__start"
                onClick={() => handleCharacterSelection("Alara")}
              >
                Choose Alara
              </button>
            </div>
          </>
        )}

        {/* TODO: THIS IS NOT BEING SHOWED UP */}
        {/* CHARACTER RESULT */}
        {characterSelected && (
          <>
            <p>Character selected: {chosenCharacter}</p>
            {userLoggedIn && (
              <p>Logged in as: {loggedInUserEmail}</p>
            )}
            <button className="gamestart__back" onClick={handleBack}>
              Change Character
            </button>
            {/* Show "Continue" button only if user is logged in and has saved progress */}
            {userLoggedIn && onContinue && (
              <button className="gamestart__continue" onClick={handleContinue}>
                Continue
              </button>
            )}
            {/* Show "Next" button after character selection */}
            <button className="gamestart__next" onClick={handleStartGame}>
              Start Game
            </button>
          </>
        )}
      </section>
    </>
  );
}
