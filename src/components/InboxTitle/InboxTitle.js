import React, { useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import "./InboxTitle.scss";

const InboxTitle = () => {
  const { appointments } = useContext(AppointmentContext);
  console.log(appointments);
  return (
    <>
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

export default InboxTitle;
