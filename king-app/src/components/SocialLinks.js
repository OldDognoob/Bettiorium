import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our KingDom if you Dare?
        </p>
        <p className="footer-subscription-text">
          You can be our royal servant if you wish time!.
        </p>
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
            <Link to="/home" className="social-logo">
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
export default SocialLinks;
