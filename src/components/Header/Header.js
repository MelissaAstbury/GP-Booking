import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { UserContext } from "../../Context/UserContext/UserContext";

const Header = () => {
  const { isUserSignedIn } = useContext(UserContext);
  return (
    <header>
      <nav>
        <NavLink to="/">
          <p>Mel GP</p>
        </NavLink>
        {!isUserSignedIn && (
          <NavLink to="signin">
            <p>Sign In</p>
          </NavLink>
        )}
        {!isUserSignedIn && (
          <NavLink to="signup">
            <p>Sign Up</p>
          </NavLink>
        )}
        {isUserSignedIn && (
          <NavLink to="bookappointment">
            <p>Book Appointment</p>
          </NavLink>
        )}

        <NavLink to="contact">
          <p>Contact Us</p>
        </NavLink>

        {isUserSignedIn && (
          <NavLink to="signout">
            <p>Sign Out</p>
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
