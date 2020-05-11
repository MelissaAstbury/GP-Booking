import React, { useContext } from "react";
import Calendar from "react-calendar";

import "./BookAppointmentDate.scss";
import "react-calendar/dist/Calendar.css";
import { AppointmentContext } from "../../Context/AppointmentContext";

const BookAppointmentDate = () => {
  const { calandarDate, setCalandarDate } = useContext(AppointmentContext);
  const minDate = new Date(new Date().setDate(new Date().getDate()));
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 90));

  return (
    <>
      <div className="calendar-title">
        <p>Select a Date:</p>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={(calandarDate) => setCalandarDate(calandarDate)}
          value={calandarDate}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    </>
  );
};

export default BookAppointmentDate;
