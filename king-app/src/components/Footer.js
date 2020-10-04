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
          Join our KingDom if you Dare?
        </p>
        <p className="footer-subscription-text">
          You can be our royal citizen if you wish for any time!.
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
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Royal Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Royal Contact</Link>
            <Link to="/">Faith Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Bettiorium Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a to="/">Instagram</a>
            <a href="/https://www.facebook.com/groups/251928932131425">
              Facebook
            </a>
            <a to="/">Youtube</a>
            <a to="/">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              BETTIORIUM
              <i class="fas fa-crown" />
            </Link>
          </div>
          <small class="website-rights">BETTIORIUM © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              href="/https://www.facebook.com/groups/251928932131425"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
