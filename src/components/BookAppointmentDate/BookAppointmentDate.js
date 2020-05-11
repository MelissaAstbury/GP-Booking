import React, { useState } from "react";
import Calendar from "react-calendar";

import "./BookAppointmentDate.scss";
import "react-calendar/dist/Calendar.css";

const BookAppointmentDate = () => {
  const [date, setDate] = useState(new Date());
  const minDate = new Date(new Date().setDate(new Date().getDate()));
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 90));

  return (
    <>
      <div className="calendar-title">
        <p>Select a Date:</p>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={(date) => setDate(date)}
          value={date}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    </>
  );
};

export default BookAppointmentDate;
