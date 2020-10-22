import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our kingdom if you dare?
        </p>
        <p className="footer-subscription-text">
          Magic happens everywhere!.
        </p>
        <div className="Contact">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">First Name*</label>
              <input
                name="firstName"
                placeholder=""
                ref={register({ required: true, maxLength: 3 })}
              />
              {errors.firstName && (
                <p>Looks like there was an error: {errors.firstName.type}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name*</label>
              <input
                name="lastName"
                placeholder=""
                ref={register({ required: true })}
              />
              {errors.lastName && (
                <p>Looks like there was an error: {errors.lastName.type}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" placeholder="">
                Email*
              </label>
              <input name="email" ref={register({ required: true })} />
              {errors.email && (
                <p>Looks like there was an error: {errors.email.type}</p>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" ref={register({ required: false })} />
            </div>
            {data && (
              <pre style={{ textAlign: "left", color: "white" }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            )}
            <Button buttonStyle="btn--outline">Royal Subscription</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Sign with us</Link>
            <Link to="/about-us">Royal Knight Tails</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Royal Contact</Link>
            <Link to="/about-us">Faith Servants</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>Listen Us</h2>
            <Link to="/videos"></Link>
            <Link to="/home">Bettiorium Awaits</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/bettiorium/" >Instagram</a>
            <a href="https://www.facebook.com/groups/251928932131425">Facebook</a>
            <a href="https://www.youtube.com/channel/UCb9OAJkIvjY_Tx0-STYNenw/featured">Youtube</a>
            <a href="https://twitter.com/bettiorium">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              BETTIORIUM
              <i class="fab fa-fort-awesome-alt" />
            </Link>
          </div>
          <small class="website-rights">BETTIORIUM © 2020</small>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/groups/251928932131425"
              class="social-icon-link facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/bettiorium/"
              class="social-icon-link instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCb9OAJkIvjY_Tx0-STYNenw/featured"
              class="social-icon-link youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/bettiorium"
              class="social-icon-link twitter"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
