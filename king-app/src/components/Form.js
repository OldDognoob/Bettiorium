
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  CHECK_EMAIL_REGEX,
  ERROR_MSG_EMAIL_PATTERN,
  ERROR_MSG_REQUIRED,
} from "./const";

import { Link } from "react-router-dom";
import usePromise from "./usePromise";
import { registerUser } from "./api";
import ButtonForm from "./ButtonForm";

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const [{ loading, resolved, error }, doRegisterUser] = usePromise(
    registerUser
  );

  const onSubmit = async (data) => {
    doRegisterUser(data);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h1>Bettiorium Royal Sign Up Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>FirstName</label>
          <input name="firstName" ref={register} />

          <label>LastName</label>
          <input name="lastName" ref={register} />

          <label>Email</label>
          <input
            name="email"
            ref={register({
              required: ERROR_MSG_REQUIRED,
              pattern: {
                value: CHECK_EMAIL_REGEX,
                message: ERROR_MSG_EMAIL_PATTERN,
              },
            })}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}

          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: ERROR_MSG_REQUIRED })}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}

          {!loading && error
            ? error.errors.map((e, idx) => <p key={idx}>{e.message}</p>)
            : null}

          {!loading && resolved ? <h6>{resolved.message}</h6> : null}

          <ButtonForm type="submit" loading={loading}>
            Submit
          </ButtonForm>
        </form>
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
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Bettiorium Influencer</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/bettiorium/">Instagram</a>
            <a href="https://www.facebook.com/groups/251928932131425">
              Facebook
            </a>
            <a href="https://www.youtube.com/channel/UCb9OAJkIvjY_Tx0-STYNenw/featured">
              Youtube
            </a>
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

export default Form;
