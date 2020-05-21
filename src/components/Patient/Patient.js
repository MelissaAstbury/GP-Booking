import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Patient.scss";

const Patient = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const userRes = await axios.get(`http://localhost:8081/api/user`);
        setUsers(userRes.data);
      } catch (error) {
        console.log("No users found", error.message);
      }
    })();
  }, []);

  return (
    <div className="user-container">
      <p>Patients List:</p>
      {/* <input type="text" /> */}
      <div>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <div key={user.id} className="user-info">
                <p>{user.firstName}</p>
                <p>{user.surname}</p>
                <p>{user.dateOfBirth}</p>
              </div>
            );
          })
        ) : (
          <p>No Patients Found</p>
        )}
      </div>
    </div>
  );
};

export default Patient;
