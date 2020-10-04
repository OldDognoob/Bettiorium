import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ReactPlayer from "react-player";
import Logo from '../logo.jpg';
import classnames from "classnames";
import useDarkMode from "../hooks/useDarkMode";

function HeroSection() {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    
    <div className="hero">
      <img src={Logo} alt="logo"/>
      <div className="hero-container">
      <div className={classnames("App", { "dark-mode": isDarkMode })}>
        <h1>KINGDOM AWAITS YOU</h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=FiXCxfWWwPo"
          controls
          playbackRate={2}
          width="896px"
          height="504px"
        />
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            ROCK THE WORLD!
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
