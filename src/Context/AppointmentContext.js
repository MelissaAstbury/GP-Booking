import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];
  const [appointments, setAppointments] = useState(initialState);
  const [calandarDate, setCalandarDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const history = useHistory();

  const onBookAppointment = (appointmentInfo) => {
    Object.assign(appointmentInfo, {
      dateSelected: calandarDate.toLocaleDateString(),
    });
    setAppointments([...appointments, appointmentInfo]);
    history.push("/appointment");
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        onBookAppointment,
        calandarDate,
        setCalandarDate,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
