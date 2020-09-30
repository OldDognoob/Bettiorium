import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";
import Toggle from "../Toggle";
import { useDarkMode } from "../useDarkMode";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
          </div>
        </nav>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
