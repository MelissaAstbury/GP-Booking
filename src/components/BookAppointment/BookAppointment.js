import React, { useState } from "react";
import Calendar from "react-calendar";

import "./BookAppointment.scss";
import "react-calendar/dist/Calendar.css";

const BookAppointment = () => {
  const [date, setDate] = useState(new Date());
  const minDate = new Date(new Date().setDate(new Date().getDate()));
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 90));

  return (
    <div className="calendar-container">
      <Calendar
        onChange={(date) => setDate(date)}
        value={date}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
};

export default BookAppointment;
