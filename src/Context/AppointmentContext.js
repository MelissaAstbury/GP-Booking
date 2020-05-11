import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];
  const [appointments, setAppointments] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const history = useHistory();

  const onBookAppointment = (appointmentInfo) => {
    setAppointments([...appointments, appointmentInfo]);
    history.push("/inboxpage");
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        onBookAppointment,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
