import React from "react";

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
      <p>Register</p>
    </div>
  );
};

export default SignIn;
