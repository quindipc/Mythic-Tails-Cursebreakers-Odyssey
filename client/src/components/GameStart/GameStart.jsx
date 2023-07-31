// DEPENDENCIES
import React from "react";
import "./GameStart.scss";
import { Link } from "react-router-dom";

// ASSEETS
import Alara from "../../assets/images/characters/Alara.svg";
import Nyx from "../../assets/images/characters/Nyx.svg";

export default function GameStart({
  handleStartGame,
  onCharacterSelect
}) {
  const handleCharacterSelection = (character) => {
    onCharacterSelect(character); // Pass the selected character back to the parent component
  };

  return (
    <section className="gamestart">
      {/* CHARACTER SELECTION */}
      <div className="gamestart__character">
        <h1 className="gamestart__name">Nyx, The Lost Cursebearer</h1>
        <label className="gamestart__container--dropdown">
          <p className="gamestart__dropdown">Description</p>
          <input type="checkbox" />
          <p className="gamestart__description">
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
        </label>
        <img className="gamestart__image" src={Nyx} alt="Nyx character" />
        <Link to="/nyx">
        <button
          className="gamestart__start"
          onClick={() => handleCharacterSelection("Nyx")}
        >
          Choose Nyx
        </button>
        </Link>
      </div>

      <hr className="gamestart__divider" />

      <div className="gamestart__character">
        <h1 className="gamestart__name">Alara, The Cursed Guardian</h1>
        <label className="gamestart__container--dropdown">
          <p className="gamestart__dropdown">Description</p>
          <input type="checkbox" />
          <p className="gamestart__description">
            Alara, a valiant and compassionate guardian, stands tall in her
            radiant armor, blessed by the divine spirits of Ethoria. Her armor
            reflects the purity of her heart, and its enchantments offer
            resilience against evil energies. In battle, she wields a gleaming,
            celestial shield that can deflect powerful attacks and a sacred sword
            imbued with the power of light. Her healing abilities can mend wounds
            and protect her allies in times of need. Choose Alara if you desire
            a path of protection, healing, and the honor of being a defender of
            the innocent.
          </p>
        </label>
        <img className="gamestart__image" src={Alara} alt="Alara character" />
        <Link to="/alara">
        <button
          className="gamestart__start"
          onClick={() => handleCharacterSelection("Alara")}
        >
          Choose Alara
        </button>
      </Link>
      </div>
    </section>
  );
}
