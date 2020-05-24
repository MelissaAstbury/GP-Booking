import React, { useState, useContext } from "react";

import { UserContext } from "../../Context/UserContext";
import Button from "../UI/Button/Button";

import "./SignUp.scss";

const SignUp = () => {
  // const [firstName, setFirstName] = useState("Melissa");
  // const [surname, setSurname] = useState("Astbury");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [email, setEmail] = useState("test@email.com");
  // const [password, setPassword] = useState("password");
  // const [address, setAddress] = useState("2 Thresher");
  // const [role, setRole] = useState("admin");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date().toLocaleDateString("fr-CA")
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
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
    <form>
      <div className="signup-container">
        <h1 className="signup-title">Sign Up!</h1>
        <div>
          <input
            type="text"
            name="firstname"
            // minLength="3"
            autoComplete="false"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <label htmlFor="firstname">First Name</label>
        </div>
        <div>
          <input
            type="text"
            value={surname}
            name="surname"
            // minLength="3"
            autoComplete="false"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            required
          />
          <label htmlFor="surname">Surname</label>
        </div>
        <div>
          <input
            type="text"
            value={address}
            name="address"
            // minLength="5"
            autoComplete="false"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
          <label htmlFor="address">Address</label>
        </div>
        <div>
          <input
            type="text"
            value={role}
            name="role"
            // minLength="3"
            autoComplete="false"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            required
          />
          <label htmlFor="role">Role</label>
        </div>
        <div>
          <input
            type="date"
            value={dateOfBirth}
            name="dateOfBirth"
            autoComplete="false"
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
            required
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
        </div>
        <div>
          <input
            type="email"
            value={email}
            name="email"
            autoComplete="false"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            name="password"
            // minLength="4"
            autoComplete="false"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <Button btnType="success" clicked={onFormSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
