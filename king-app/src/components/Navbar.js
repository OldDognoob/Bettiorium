import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";
import Toggle from "../Toggle";
import { useDarkMode } from "../useDarkMode";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton]= useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false)
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  const [theme, toggleTheme] = useDarkMode("light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              BETTIORIUM <i className="fas fa-crown"></i>
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
                  to="/videos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
