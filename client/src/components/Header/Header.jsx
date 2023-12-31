// DEPENDENCIES
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// ASSETS
import colorLogo from "../../assets/images/logo/Mythic-Tails-Logo-Color.svg";

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
            <Link to="/"onClick={closeMenu}>
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
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Home</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/play-game"
            onClick={closeMenu}
            >
              <li className="header__navlist-item">Play Now</li>
            </Link>

          </ul>
          <ul className="header__navlist--desktop">
            <Link
              className="header__navlist-item--link"
              to="/"
            >
              <li className="header__navlist-item">Home</li>
            </Link>

            <Link
              className="header__navlist-item--link"
              to="/play-game"
            >
              <li className="header__navlist-item">Play Now</li>
            </Link>
          
          </ul>
      </nav>
      <hr className="header__divider" />
      </header>
  );
}
