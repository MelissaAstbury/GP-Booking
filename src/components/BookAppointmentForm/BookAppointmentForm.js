import React, { useState } from "react";

import "./BookAppointmentForm.scss";

const BookAppointmentForm = () => {
  const [timeChosen, setTimeChosen] = useState("");
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form>
      <label>What time do you wish to book?</label>
      <div>
        <input
          type="radio"
          name="time-chosen"
          value="Morning"
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Morning
        <input
          type="radio"
          name="time-chosen"
          value="Mid Day"
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Mid Day
        <input
          type="radio"
          name="time-chosen"
          value="Evening"
          required
          onChange={(e) => {
            setTimeChosen(e.target.value);
          }}
        />
        Evening
      </div>
      <p>{timeChosen}</p>
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
        <p>{appointmentTitle}</p>
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
      <button>Submit</button>
    </form>
  );
};

export default BookAppointmentForm;
