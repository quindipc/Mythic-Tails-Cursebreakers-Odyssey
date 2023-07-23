// Dependancies
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__navlist">
            <Link to="/" element={HomePage}>
            <li className="header__navlist-item">Home</li>
            </Link>

            <Link to="/play-game" element={GamePage}>
            <li className="header__navlist-item">Play Now</li>
            </Link>

            {/* <li className="header__navlist-item">Create List</li>
            <li className="header__navlist-item">Create Details</li>
            <li className="header__navlist-item">Create Management</li>
            <li className="header__navlist-item">Login</li>
            <li className="header__navlist-item">Contact</li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
