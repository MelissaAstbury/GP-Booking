import React, { useState, useContext } from "react";

import { UserContext } from "../../Context/UserContext";

import "./SignUp.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("Melissa");
  const [surname, setSurname] = useState("Astbury");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("password");
  const [address, setAddress] = useState("2 Thresher");
  const [role, setRole] = useState("admin");
  const { onSignUp } = useContext(UserContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: firstName,
      surname: surname,
      dateOfBirth: dateOfBirth,
      email: email,
      password: password,
      address: address,
      role: role,
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
        <p>Address:</p>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
        <p>Role:</p>
        <input
          type="text"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
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
        <p>Email:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
