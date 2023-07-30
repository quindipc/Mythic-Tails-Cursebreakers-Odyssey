// DEPENDENCIES
import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

// ASSETS
import LinkedIn from "../../assets/images/icons/icons8-linkedin.svg";
import Github from "../../assets/images/icons/icons8-github.svg";
import Mail from "../../assets/images/icons/mail.svg";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container--section">
        <div className="contact__container--details">
          <hr className="contact__divider" />

          <h2 className="contact__title">About the Project</h2>
          <p className="contact__description">
            Hey there! My name is Chelsea Quindipan and I'm thrilled to present
            "Mythic Tails: Cursebreaker's Odyssey," a passion project born
            during my time at the Software Engineering Bootcamp at BrainStation.
            As a huge fan of video games, I wanted to create something special
            that brought back the charm of those classic story-driven and
            choose-your-own-adventure games that enchanted us in the past. As
            part of my Software Engineering Bootcamp at BrainStation, this
            project serves as my final Capstone endeavor, combining my technical
            skills and creativity to bring this fantasy world to life.
          </p>

          <hr className="contact__divider" />

          <h2 className="contact__title">What Inspired Me</h2>
          <p className="contact__description">
            You know, there's something magical about games that have
            straightforward mechanics yet offer an engaging and immersive
            storyline. The nostalgia of those old-school games stuck with me,
            and I knew I had to pay tribute to that unforgettable experience.
            Thus, "Mythic Tails: Cursebreaker's Odyssey" came to life!
          </p>

          <hr className="contact__divider" />

          <h2 className="contact__title">Technologies Used</h2>
          <p className="contact__description">
            To make this enchanting universe a reality, I dived into modern web
            technologies. I used React for building interactive user interfaces,
            while on the backend, I harnessed the power of MySQL, knex.js, and
            Node.js for seamless data management and real-time interactions.
            And, of course, Express.js served as the backbone for handling
            server-side operations.
          </p>
          <p className="contact__description">
            Let me tell you, crafting the stories and designing branching paths
            that link to various endings was both thrilling and challenging! As
            a Full Stack Software Engineer, this project was a defining moment
            for me, stretching my creativity to new heights.
          </p>

          <p className="contact__description">
            Interested in learning more? You can contact me below:{" "}
          </p>

          <ul className="contact__links">
            <Link
              className="contact__link"
              to="https://www.linkedin.com/in/chelsea-quindipan/"
            >
              <li className="contact__link">LinkedIn</li>
              <img
                className="contact__icon"
                src={LinkedIn}
                alt="LinkedIn Icon"
              />
            </Link>
            <Link className="contact__link" to="https://github.com/quindipc">
              <li className="contact__link">Github</li>
              <img className="contact__icon" src={Github} alt="Github Icon" />
            </Link>
            <Link className="contact__link" to="mailto:quindipc@gmail.com">
              <li className="contact__link">Email</li>
              <img className="contact__icon" src={Mail} alt="Mail Icon" />
            </Link>
          </ul>
          <hr className="contact__divider" />
        </div>
      </div>
    </section>
  );
}
