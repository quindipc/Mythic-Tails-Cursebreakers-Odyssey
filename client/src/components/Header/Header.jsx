// DEPENDENCIES
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// ASSETS
import colorLogo from "../../assets/images/logo/Mythic-Tails-Logo-Color.svg";

// PAGES
import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LogOutPage from "../../pages/LogOutPage/LogOutPage"

export default function Header() {
  const [toggled, setToggled] = useState(false);

  const handleBurger = () => {
    setToggled(!toggled);
  };
  

  const closeMenu = () => {
    setToggled(false);
  };


  return (
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo-container">
            <Link to="/" element={HomePage} onClick={closeMenu}>
            <img
              className="header__logo"
              src={colorLogo}
              alt="Mythic Tails Logo"
            />
            </Link>
          </div>
          <div className={`header__burger ${toggled ? "active" : ""}`} onClick={handleBurger}>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
          </div>
          <ul className={`header__navlist ${toggled ? "active" : ""}`}>
            <Link
              className="header__navlist-item--link"
              to="/"
            element={<HomePage />}
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Home</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/play-game"
            element={<GamePage />}
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Play Now</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/login"
            element={<LoginPage />}
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Login</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/register"
            element={<RegisterPage />}
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Register</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/logout"
            element={<LogOutPage />}
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Log Out</li>
            </Link>

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

            <Link
              className="header__navlist-item--link"
              to="/login"
              element={<LoginPage/>}
            >
              <li className="header__navlist-item">Login</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/register"
              element={<RegisterPage/>}
            >
              <li className="header__navlist-item">Register</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/logout"
              element={<LogOutPage/>}
            >
              <li className="header__navlist-item">Log Out</li>
          </Link>
          
          </ul>
      </nav>
      <hr className="header__divider" />
      </header>
  );
}
