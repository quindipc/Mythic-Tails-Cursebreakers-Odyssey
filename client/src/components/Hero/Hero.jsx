// DEPENDENCIES
import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

// PAGES
import GamePage from "../../pages/GamePage/GamePage"

// ASSETS
import HeroImg from "../../assets/images/logo/Mythic-Tails-Logo-Color-words.svg"

export default function Hero() {
  return (
    <>
      <section className="hero">
              <img src={HeroImg} alt="Hero Image" className="hero__image" />
              <Link to="/play-game" element={<GamePage/>} >
        <button className="hero__button">Play Now!</button>
                  
        </Link>
      </section>
    </>
  );
}
