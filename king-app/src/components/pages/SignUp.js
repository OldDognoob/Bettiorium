import React from "react";
import ReactDOM from "react-dom";
import Form from "../Form";
import signUp from "../signUp";
import Love from "../Love";
import { StateMachineProvider, createStore } from "little-state-machine";
import Fantasy from "../../fantasy.jpg";

import "../Footer.css";

createStore({
  signUp,
});

function SignUp() {
  return (
    <>
      <div className="hero">
        <img src={Fantasy} alt="fantasy" />
        <StateMachineProvider>
          <Love/>
          <Form />
        </StateMachineProvider>
      </div>
    </>
  );
}

export default SignUp;
