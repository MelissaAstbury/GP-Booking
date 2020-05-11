import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];
  const [appointments, setAppointments] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const mockTimeChosen = "morning";
  const mockAppointmentTitle = "headache";
  const mockDescription = "description";
  const history = useHistory();

  const onBookAppointment = (timeChosen, appointmentTitle, description) => {
    if (
      timeChosen === mockTimeChosen &&
      appointmentTitle === mockAppointmentTitle &&
      description === mockDescription
    ) {
      setAppointments(true);
      history.push("/inboxpage");
    } else {
      alert("Your request is not valid");
    }
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
