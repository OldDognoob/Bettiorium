import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateSignUp } from "./signUpActions";
import { useStateMachine } from "little-state-machine";

import { Link } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validateUsername = async (value) => {
  await sleep(3000);
  return value === "monster";
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    errors,
  } = useForm();
  const {
    state: { signUp },
    action,
  } = useStateMachine(updateSignUp);

  const onSubmit = (data, e) => {
    e.target.reset();
    action(data);
    alert("Successfully ❤️");
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      errors[Object.keys(errors)[0]].ref.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>BETTIORIUM SIGN UP FORM</h1>

      <label>Email</label>
      <input
        defaultValue={signUp.email}
        ref={register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })}
        name="email"
      />
      {errors.email && errors.email.type === "required" && (
        <p>This is required</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>Invalid email address</p>
      )}

      <label>First name</label>
      <input
        defaultValue={signUp.firstname}
        ref={register({ minLength: 3 })}
        name="firstname"
      />
      {errors.firstname && <p>First name is too short</p>}

      <label>Last name</label>
      <input
        defaultValue={signUp.lastname}
        ref={register({ minLength: 3 })}
        name="lastname"
      />
      {errors.lastname && <p>Last name is too short</p>}

      <label>Username</label>
      <input
        defaultValue={signUp.username}
        ref={register({ required: true, validate: validateUsername })}
        name="username"
      />
      {errors.username && <p>Username is already taken</p>}

      <label>Password</label>
      <input
        defaultValue={signUp.password}
        ref={register({
          required: true,
          pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        })}
        name="password"
        type="password"
      />
      {errors.password && <p>password is too simple</p>}

      <input
        type="submit"
        value={isSubmitting ? "Sending..." : "Submit"}
        disabled={isSubmitting}
      />
    </form>
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

export default Form;
