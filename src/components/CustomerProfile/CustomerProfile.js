import React from "react";

import "./CustomerProfile.scss";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  return (
    <div>
      <h1>Personal Details:</h1>
      <p>Melissa Astbury</p>
      <p>22 years old</p>
      <p>Balamory Way, Washington, Greater London, LN10 8GY</p>
      <Link to="/bookappointment">
        <button>Book Appointment</button>
      </Link>
    </div>
  );
};

export default CustomerProfile;
