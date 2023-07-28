// DEPENDANCIES
import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container--section">
        <div className="contact__container--details">
          <h2 className="contact__title">About the Developer</h2>
          <p className="contact__description">
            Chelsea Quindipan is a Full Stack Software Engineer.
          </p>
          <hr className="contact__divider" />
          <ul className="contact__links">
            <Link to="">
              <li>LinkedIn</li>
            </Link>
            <Link to="">
              <li>Github</li>
            </Link>
            <Link to="">
              <li>Email</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
