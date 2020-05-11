import React from "react";

import BookAppointmentDate from "../../components/BookAppointmentDate/BookAppointmentDate";
import BookAppointmentForm from "../../components/BookAppointmentForm/BookAppointmentForm";

const BookAppointmentPage = () => {
  return (
    <div>
      <>
        <BookAppointmentDate />
        <BookAppointmentForm />
      </>
    </div>
  );
};

export default BookAppointmentPage;
