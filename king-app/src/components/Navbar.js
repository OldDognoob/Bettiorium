import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useDarkMode from "../hooks/useDarkMode";
import "./Navbar.css";
// import "../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
        <nav className="navbar">
          <div className="navbar-container">
            <button className="toggle-button" onClick={toggleDarkMode}>
              {isDarkMode ? "🌙 " : "🌞 "}
            </button>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BETTIORIUM
            <i class="fas fa-crown" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/videos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>

            <li>
              <Link
                to="/articles"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          </div>
        </nav>
    </>
  );
}
export default Navbar;
