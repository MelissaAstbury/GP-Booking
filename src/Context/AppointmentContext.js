import React, { createContext, useState, useEffect } from "react";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];
  const [appointments, setAppointments] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const createAppointment = () => {
    // setAppointments();
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
