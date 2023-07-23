// DEPENDANCIES
import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

// Pages
import GamePage from "../../pages/GamePage/GamePage"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">Mythic Tails:</h1>
        <h2 className="hero__title-block">Cursebreaker's Odyssey</h2>
        {/* TODO: Insert image here */}
              {/* <img src="" alt="Hero Image" className="hero" /> */}
              <Link to="/play-game" element={<GamePage/>} >
        <button className="hero__button">Play Now!</button>
                  
        </Link>
      </section>
    </>
  );
}
