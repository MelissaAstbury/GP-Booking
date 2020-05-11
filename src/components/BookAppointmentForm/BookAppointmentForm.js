import React, { useState, useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";

import "./BookAppointmentForm.scss";

const BookAppointmentForm = () => {
  const [timeChosen, setTimeChosen] = useState("morning");
  const [appointmentTitle, setAppointmentTitle] = useState("headache");
  const [description, setDescription] = useState("description");
  // const [ errors, setErrors] = useState();
  const { onBookAppointment } = useContext(AppointmentContext);

  const onSubmit = (e) => {
    e.preventDefault();
    onBookAppointment(timeChosen, appointmentTitle, description);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>What time do you wish to book?</label>
      <div>
        <input
          type="radio"
          name="time-chosen"
          value="morning"
          required
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Morning
        <input
          type="radio"
          name="time-chosen"
          value="mid-day"
          required
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Mid Day
        <input
          type="radio"
          name="time-chosen"
          value="evening"
          required
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Evening
      </div>

      <br />
      <div>
        <label>Reason for Appointment?</label>
        <input
          type="text"
          name="appointment-title"
          value={appointmentTitle}
          required
          onChange={(e) => setAppointmentTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookAppointmentForm;
