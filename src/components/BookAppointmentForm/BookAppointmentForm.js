import React, { useState, useContext } from "react";

import { AppointmentContext } from "../../Context/AppointmentContext";
import { UserContext } from "../../Context/UserContext";
import Calendar from "../BookAppointmentDate/BookAppointmentDate";
import "./BookAppointmentForm.scss";

const BookAppointmentForm = () => {
  const [appointmentTitle, setAppointmentTitle] = useState("headache");
  const [description, setDescription] = useState("description");
  const { onBookAppointment } = useContext(AppointmentContext);
  const { userId } = useContext(UserContext);
  // const [ errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const appointmentInfo = {
      title: appointmentTitle,
      description: description,
      creator: userId,
    };
    onBookAppointment(appointmentInfo);
  };

  return (
    <>
      <Calendar />
      <form onSubmit={onSubmit}>
        <div className="form-container">
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
