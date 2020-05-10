import React from "react";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to our GP service!</h1>
      <p>We are Mel Medical Centre.</p>
      <p>
        This practice is responsible for providing you with high quality
        customer care.
      </p>
      <p>Whether this be in the medical centre or at home.</p>
      <p>
        We will always cater to your needs to make your experience as safe as
        can be.
      </p>
      <div className="opening-times">
        <h3>Our Opening Hours:</h3>
        <ul>
          <li>Sun: CLOSED</li>
          <li>Mon: 08:00 - 19:00</li>
          <li>Tue: 08:00 - 19:00</li>
          <li>Wed: 08:00 - 19:00</li>
          <li>Thur: CLOSED</li>
          <li>Fri: 08:00 - 19:00</li>
          <li>Sat: 08:00 - 17:00</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
