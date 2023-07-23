// Dependancies
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";

export default function Footer() {
  return (
    <>
      <header className="footer">
        <nav className="footer__nav">
          <ul className="footer__navlist">
            <Link to="/" element={HomePage}>
            <li className="footer__navlist-item">Home</li>
            </Link>

            <Link to="/play-game" element={GamePage}>
            <li className="footer__navlist-item">Play Now</li>
            </Link>

            {/* <li className="footer__navlist-item">Create List</li>
            <li className="footer__navlist-item">Create Details</li>
            <li className="footer__navlist-item">Create Management</li>
            <li className="footer__navlist-item">Login</li>
            <li className="footer__navlist-item">Contact</li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
