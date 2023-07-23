// DEPENDANCIES
import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about">
        <h1 className="about__title">ABOUT THE GAME</h1>
        <p className="about__description">
          "Mythic Tails: Cursebreaker's Odyssey" takes players on an incredible
          journey through the mystical realm of Ethoria. The game offers two
          intriguing prologues, each featuring a unique protagonist with their
          own gripping story.
        </p>
      </section>
    </>
  );
}
