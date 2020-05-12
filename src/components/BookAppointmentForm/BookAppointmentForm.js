import React, { useState, useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import Calendar from "../BookAppointmentDate/BookAppointmentDate";

import "./BookAppointmentForm.scss";

const BookAppointmentForm = () => {
  const [timeChosen, setTimeChosen] = useState("morning");
  const [appointmentTitle, setAppointmentTitle] = useState("headache");
  const [description, setDescription] = useState("description");
  // const [ errors, setErrors] = useState();
  const { onBookAppointment } = useContext(AppointmentContext);

  const onSubmit = (e) => {
    e.preventDefault();
    let appointmentInfo = {
      timeChosen: timeChosen,
      appointmentTitle: appointmentTitle,
      description: description,
      date: new Date(),
    };
    onBookAppointment(appointmentInfo);
  };

  return (
    <>
      <Calendar />
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <label>What time do you wish to book?</label>
          <div className="radio-options">
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
          <div className="reason-input">
            <label>Reason for Appointment?</label>
            <input
              type="text"
              name="appointment-title"
              value={appointmentTitle}
              required
              onChange={(e) => setAppointmentTitle(e.target.value)}
            />
          </div>
          <div className="description-input">
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default BookAppointmentForm;