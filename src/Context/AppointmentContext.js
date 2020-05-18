import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];
  const [appointments, setAppointments] = useState(initialState);
  const [calandarDate, setCalandarDate] = useState(new Date());

  const history = useHistory();

  const onBookAppointment = (appointmentInfo) => {
    Object.assign(appointmentInfo, {
      appointmentDate: calandarDate.toLocaleDateString(),
    });
    (async () => {
      try {
        await axios.post("http://localhost:8081/api/appointment", {
          appointmentInfo,
        });
        history.push("/appointment");
      } catch (error) {
        console.log("Appointment creation failed", error.message);
      }
    })();
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        onBookAppointment,
        calandarDate,
        setCalandarDate,
        setAppointments,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
