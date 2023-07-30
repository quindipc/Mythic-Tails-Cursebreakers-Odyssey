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
            <Link className="contact__link" to="https://www.linkedin.com/in/chelsea-quindipan/">
              <li className="contact__link" >LinkedIn</li>
            </Link>
            <Link className="contact__link" to="https://github.com/quindipc">
              <li  className="contact__link" >Github</li>
            </Link>
            <Link  className="contact__link" to="mailto:quindipc@gmail.com">
              <li  className="contact__link" >Email</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
