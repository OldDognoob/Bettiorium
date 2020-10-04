import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
// import Videos from "../pages/Videos";
import Dragon from "./../../dragon.jpg";
import "../../App.css";

// export default function AboutUs() {
//   return <h1 className='aboutUs'>ABOUT US</h1>;
// }

function AboutUs() {
  return (
    <>
      <div className="hero">
        <img src={Dragon} alt="dragon"/>
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
