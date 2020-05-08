import React from "react";
import { Link } from "react-router-dom";

import "./SignUp.scss";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up!</h1>
      <p>First Name:</p>
      <input type="text" required />
      <p>Surname Name:</p>
      <input type="text" required />
      <p>Date of Birth:</p>
      <input type="number" required />
      <p>Email Address:</p>
      <input type="text, number" required />
      <p>Password:</p>
      <input type="text, number" required />
      <Link to="/signin">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default SignUp;
