// Dependancies
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";
import colorLogo from "../../assets/images/logo/Mythic-Tails-Logo-Color.svg";

export default function Header() {
  const [toggled, setToggled] = useState(false);

  const handleBurger = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo-container">
            <Link to="/" element={HomePage}>
            <img
              className="header__logo"
              src={colorLogo}
              alt="Mythic Tails Logo"
            />
            </Link>
          </div>
          <div className={`header__burger ${toggled ? "active" : ""}`} onClick={handleBurger}>
            <span></span>
            <span></span>
          </div>
          <ul className={`header__navlist ${toggled ? "active" : ""}`}>
            <Link
              className="header__navlist-item--link"
              to="/"
              element={HomePage}
            >
              <li className="header__navlist-item">Home</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/play-game"
              element={GamePage}
            >
              <li className="header__navlist-item">Play Now</li>
            </Link>

            {/* <li className="header__navlist-item">Creature List</li>
            <li className="header__navlist-item">Creature Details</li>
            <li className="header__navlist-item">Creature Management</li>
            <li className="header__navlist-item">Login</li>
            <li className="header__navlist-item">Sign Up</li>
            <li className="header__navlist-item">Contact</li> */}
          </ul>
          <ul className="header__navlist--desktop">
            <Link
              className="header__navlist-item--link"
              to="/"
              element={HomePage}
            >
              <li className="header__navlist-item">Home</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/play-game"
              element={GamePage}
            >
              <li className="header__navlist-item">Play Now</li>
            </Link>

            {/* <li className="header__navlist-item">Creature List</li>
            <li className="header__navlist-item">Creature Details</li>
            <li className="header__navlist-item">Creature Management</li>
            <li className="header__navlist-item">Login</li>
            <li className="header__navlist-item">Sign Up</li>
            <li className="header__navlist-item">Contact</li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
