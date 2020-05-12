import React, { useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import "./Appointment.scss";

const Appointment = () => {
  const { appointments } = useContext(AppointmentContext);
  console.log(appointments);
  return (
    <>
      <p>Your appointment hisory and upcoming appointments:</p>
      {appointments.map((appointment, index) => {
        return (
          <div key={index} className="appointment-info">
            <p>Requested at {appointment.date.toLocaleString()}</p>
            <h3>{appointment.appointmentTitle}</h3>
            <p>{appointment.timeChosen}</p>
            <p>{appointment.description}</p>
            <p>Appointment Date {appointment.dateSelected}</p>
          </div>
        );
      })}
    </>
  );
};

export default Appointment;
