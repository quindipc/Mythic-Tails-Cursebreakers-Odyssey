import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

import Creature from "../../assets/images/pets-creatures/Mythic-Tails-Creature-3.svg"

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404 Not Found</h1>
      <img className="notfound__image" src={Creature} alt="Mythic Tails Creature" />
      <p className="notfound__message">
              Oops, something went wrong. The page you are looking for does not exist.
      </p>
          <p className="notfound__emoji">:(</p>
          <Link to="/" className="notfound__back">
        <p>Go back</p>
      </Link> 
    </div>
  );
}
