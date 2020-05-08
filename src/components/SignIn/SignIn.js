import React from "react";
import { Link } from "react-router-dom";

import "./SignIn.scss";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Email:</p>
      <input type="text" required />
      <p>Password:</p>
      <input type="text" required />
      <Link to="/customerprofile">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default SignIn;
