import React, { useState, useContext } from "react";

import { UserContext } from "../../Context/UserContext";
// import "./EditPatientForm.scss";

const EditPatientForm = () => {
  const { userToEdit } = useContext(UserContext);
  const [firstName, setFirstName] = useState(userToEdit.firstName);
  const [surname, setSurname] = useState(userToEdit.surname);
  const [dateOfBirth, setDateOfBirth] = useState(userToEdit.dateOfBirth);
  const [email, setEmail] = useState(userToEdit.email);
  const [address, setAddress] = useState(userToEdit.address);

  const onEditSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: firstName,
      surname: surname,
      dateOfBirth: dateOfBirth,
      email: email,
      address: address,
    };
    // onEditUser(userInfo);
  };
  return (
    <form onSubmit={onEditSubmit}>
      <div>
        <h1>Edit User</h1>
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
        <button className="edit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditPatientForm;
