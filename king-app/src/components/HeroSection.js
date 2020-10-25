import React from "react";
import "../App.css";
import { Button } from "./Button";
import { RoyalButton } from "./RoyalButton";
import "./HeroSection.css";
import ReactPlayer from "react-player";
import Logo from "../logo.jpg";
import classnames from "classnames";
import useDarkMode from "../hooks/useDarkMode";

function HeroSection() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="hero">
      <img src={Logo} alt="logo" />
      <div className="hero-container">
        <div className={classnames("App", { "dark-mode": isDarkMode })}>
          <h1>KINGDOM AWAITS YOU</h1>
          <h1>Do you dare to join Us?</h1>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=AaA9g2C5-zc&feature=youtu.be&fbclid=IwAR0tqRJqVFtYV_ZVXhihoblq8JOHqRNFXRQDPAlOJ_lSVoUGr--OcqNWT-Y"
            controls
            playbackRate={1}
            width="896px"
            height="504px"
          />

          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Join our Kingdom! <i className="far fa-play-circle" />
            </Button>
            <RoyalButton
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              Watch the Royal trailer <i className="far fa-play-circle" />
            </RoyalButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
