import React, { useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import "./InboxTitle.scss";

const InboxTitle = () => {
  const { appointments } = useContext(AppointmentContext);
  return (
    <>
      {appointments.map((appoitment, index) => {
        return (
          <div key={index}>
            <h3>{appoitment.appointmentTitle}</h3>
            <p>{appoitment.description}</p>
            <p>{appoitment.timeChosen}</p>
            <p>Requested at {appoitment.date}</p>
          </div>
        );
      })}
    </>
  );
};

export default InboxTitle;
