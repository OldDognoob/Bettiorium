import React from "react";
import Raven from "../../raven.jpg";
import Footer from "../Footer";
// import ContactForm from "../ContactForm";
import "../Footer.css";

function ContactUs() {
  return (
    <>
      <div className="hero">
        <img src={Raven} alt="raven" />
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
