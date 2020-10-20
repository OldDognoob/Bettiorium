import React from "react";
import Cards from "../Cards";
import Knight from "../Knight";
import Dragon from "./../../dragon.jpg";
import "../../App.css";


function AboutUs() {
  return (
    <>
      <div className="hero">
        <img src={Dragon} alt="dragon" />
        <Knight />
        <Cards />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AboutUs;
