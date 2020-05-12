import React, { useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import "./Appointment.scss";

const Appointment = () => {
  const { appointments } = useContext(AppointmentContext);
  console.log(appointments);
  return (
    <div className="appointment-container">
      <div className="title">
        <h1>Your appointment hisory and upcoming appointments:</h1>
      </div>
      {appointments.map((appointment, index) => {
        return (
          <div key={index} className="appointment-info">
            <p className="date-requested">
              Requested at {appointment.date.toLocaleString()}
            </p>
            <p className="appointment-name">{appointment.appointmentTitle}</p>
            {/* <p className="time-chosen">{appointment.timeChosen}</p> */}
            <p className="description">{appointment.description}</p>
            <p className="appointment-date">
              Appointment Date: {appointment.dateSelected}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Appointment;
