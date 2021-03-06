import React, { useContext, useEffect } from "react";
import axios from "axios";

import { AppointmentContext } from "../../Context/AppointmentContext";
import Button from "../UI/Button/Button";
import "./Appointment.scss";

const Appointment = (props) => {
  const { appointments, setAppointments, deleteAppointment } = useContext(
    AppointmentContext
  );

  useEffect(() => {
    (async () => {
      try {
        const userId = localStorage.getItem("userId");
        const appointmentRes = await axios.get(
          `http://localhost:8081/api/appointment/list/${userId}`
        );
        setAppointments(appointmentRes.data);
        localStorage.setItem(
          "appointments",
          JSON.stringify(appointmentRes.data)
        );
      } catch (error) {
        console.log("Error retrieving appointments -", error.message);
      }
    })();
    // eslint-disable-next-line
  }, [props.history]);

  return (
    <div className="appointment-container">
      <div className="title">
        <h1>Your appointment history and upcoming appointments:</h1>
      </div>
      {appointments.length > 0 ? (
        appointments.map((appointment) => {
          return (
            <div key={appointment._id} className="appointment-info">
              <div>
                <p className="appointment-name">{appointment.title}</p>
                <p className="appointment-date">
                  Appointment Date: {appointment.appointmentDate}
                </p>
              </div>
              <div>
                <Button
                  btnType="error"
                  clicked={() => {
                    deleteAppointment(appointment._id);
                  }}
                >
                  <span>
                    <i className="far fa-trash-alt"></i>
                  </span>
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <p>You have no appointments booked with us.</p>
      )}
    </div>
  );
};

export default Appointment;
