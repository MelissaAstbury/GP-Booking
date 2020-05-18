import React, { useContext, useEffect } from "react";
import axios from "axios";

import { AppointmentContext } from "../../Context/AppointmentContext";
import { UserContext } from "../../Context/UserContext";
import "./Appointment.scss";

const Appointment = () => {
  const { appointments, setAppointments } = useContext(AppointmentContext);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const appointmentRes = await axios.get(
          `http://localhost:8081/api/appointment/${userId}`
        );
        setAppointments(...appointments, appointmentRes.data);
      } catch (error) {
        console.log("error retrieving appointments", error.message);
      }
    }
    fetchData();
  }, [userId]);
  console.log(appointments);
  return (
    <div className="appointment-container">
      <div className="title">
        <h1>Your appointment history and upcoming appointments:</h1>
      </div>
      {appointments &&
        appointments.map((appointment, index) => {
          return (
            <div key={index} className="appointment-info">
              <p className="date-requested">
                {/* Requested at {appointment.date.toLocaleString()} */}
              </p>
              <p className="appointment-name">{appointment.title}</p>
              {/* <p className="description">{appointment.description}</p> */}
              <p className="appointment-date">
                {/* Appointment Date: {appointment.dateSelected} */}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Appointment;
