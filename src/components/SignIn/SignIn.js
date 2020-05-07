import React from "react";
import { NavLink } from "react-router-dom";

import "./SignIn.scss";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Email:</p>
      <input type="text" required />
      <p>Password:</p>
      <input type="text" required />
      <button>Log In</button>
      <NavLink to="/SignUp">
        <p>Register</p>
      </NavLink>
    </div>
  );
};

export default SignIn;
