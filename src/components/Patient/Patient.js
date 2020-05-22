import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../Context/UserContext";
import EditPatientForm from "../../components/EditPatientForm/EditPatientForm";

import "./Patient.scss";

const Patient = () => {
  const [users, setUsers] = useState([]);
  const { userToEdit, setUserToEdit } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const userRes = await axios.get(`http://localhost:8081/api/user`);
        setUsers(userRes.data);
      } catch (error) {
        console.log("No users found", error.message);
      }
    })();

    return () => {
      setUserToEdit(null);
    };
  }, [setUserToEdit]);

  return (
    <div className="user-container">
      {userToEdit !== null ? (
        <EditPatientForm />
      ) : users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user._id} className="user-info">
              <p>{user.firstName}</p>
              <p>{user.surname}</p>
              <p>{user.dateOfBirth}</p>
              <button onClick={() => setUserToEdit(user)}>Edit</button>
            </div>
          );
        })
      ) : (
        <p>No Patients Found</p>
      )}
    </div>
  );
};

export default Patient;
