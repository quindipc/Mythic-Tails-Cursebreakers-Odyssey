// DEPENDANCIES
import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

//ASSETS
import Alara from "../../assets/images/characters/Alara.svg";
import Nyx from "../../assets/images/characters/Nyx.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container--section">
        <div className="about__container">
          <h2 className="about__title">ABOUT THE GAME</h2>
          <p className="about__description">
            "Mythic Tails: Cursebreaker's Odyssey" takes players on an
            incredible journey through the mystical realm of Ethoria. The game
            offers two intriguing prologues, each featuring a unique protagonist
            with their own gripping story. In this RPG-style game,
            players become heroes tasked with breaking the curse and saving the
            land of Ethoria. Throughout the game, players encounter mythical
            creatures, each plagued with unique curses, and must decide between
            saving the creatures or confronting the evil being behind the curse.
          </p>
          <hr className="about__divider" />
        </div>
        <div className="about__container">
          <h2 className="about__title">CHARACTERS</h2>
          <div className="about__container--characters">
            <div className="about__container--characterdetails">
              <h3 className="about__subtitle">Alara, The Cursed Guardian </h3>
              <div className="about__container--content">
                <img src={Alara} alt="Alara" className="about__character-img" />
                <p className="about__description">
                  In the first prologue, players assume the role of Alara, a
                  young guardian chosen by the Spirit of Balance. With her
                  special abilities to connect with creatures and wield the
                  latent magic of the land, Alara is the last hope to break the
                  curse cast by the power-hungry sorceress, Aveline. Guided by
                  the Spirit of Balance, Alara faces crucial choices, including
                  whether to help a suffering forest spirit named Elowen in her
                  quest for the Radiant Bloom. The decisions players make shape
                  Alara's path, her abilities, and her ultimate showdown with
                  Aveline.
                </p>
              </div>
            </div>
            <hr className="about__divider--horizontal" />

            <div className="about__container--characterdetails">
              <h3 className="about__subtitle">Nyx, The Lost Cursebearer</h3>

              <div className="about__container--content">
                <img src={Nyx} alt="Nyx" className="about__character-img" />
                <p className="about__description">
                  The second prologue puts players in the shoes of Nyx, the
                  enigmatic Lost Cursebearer. Nyx roams Ethoria, haunted by
                  visions and possessing dark magic. With no memory of their
                  past, Nyx believes they hold the key to breaking the curse.
                  Players must make a pivotal decision when confronted by a
                  cursed creature begging for release. Nyx can choose to
                  continue their solitary pursuit of the Tear of Radiance or
                  show compassion to the creature and gain a powerful ally. As
                  Nyx's powers grow their destiny hangs in the balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
