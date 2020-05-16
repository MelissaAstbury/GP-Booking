import React, { useContext, useState } from "react";

import { UserContext } from "../../Context/UserContext";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("andrew@email.com");
  const [password, setPassword] = useState("hidden");
  const { onSignIn } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="signin-container">
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

        <button className="signin-button" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
