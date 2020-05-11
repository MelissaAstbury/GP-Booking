import React from "react";

import BookAppointment from "../../components/BookAppointment/BookAppointment";
import BookAppointmentForm from "../../components/BookAppointmentForm/BookAppointmentForm";

const BookAppointmentPage = () => {
  return (
    <div>
      <>
        <BookAppointment />
        <BookAppointmentForm />
      </>
    </div>
  );
};

export default BookAppointmentPage;
