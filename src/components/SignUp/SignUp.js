import React, { useState, useContext } from "react";

import { UserContext } from "../../Context/UserContext";

import "./SignUp.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("Melissa");
  const [surname, setSurname] = useState("Astbury");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailAddress, setEmailAddress] = useState("test@email.com");
  const [password, setPassword] = useState("password");
  const { onSignUp } = useContext(UserContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: firstName,
      surname: surname,
      dateOfBirth: dateOfBirth,
      emailAddress: emailAddress,
      password: password,
    };
    onSignUp(userInfo);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="signup-container">
        <h1>Sign Up!</h1>
        <p>First Name:</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <p>Surname:</p>
        <input
          type="text"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          required
        />
        <p>Date of Birth:</p>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
          required
        />
        <p>Email Address:</p>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
          required
        />
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <button className="signup-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUp;
