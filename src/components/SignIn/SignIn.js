import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

import { UserContext } from "../../Context/UserContext/UserContext";

import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignIn } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <p>Email:</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <p>Password:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
      {/* <Link to="/customerprofile">
        <button>Log In</button>
      </Link> */}
    </form>
  );
};

export default SignIn;