import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { UserContext } from "../../Context/UserContext/UserContext";

const Header = () => {
  const { isUserSignedIn, onSignOut } = useContext(UserContext);
  return (
    <header>
      <nav>
        <li>
          <NavLink to="/">
            <p>Mel GP</p>
          </NavLink>
        </li>
        {!isUserSignedIn && (
          <li>
            <NavLink to="signin">
              <p>Sign In</p>
            </NavLink>
          </li>
        )}
        {!isUserSignedIn && (
          <li>
            <NavLink to="signup">
              <p>Sign Up</p>
            </NavLink>
          </li>
        )}
        {isUserSignedIn && (
          <li>
            <NavLink to="bookappointment">
              <p>Book Appointment</p>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="contact">
            <p>Contact Us</p>
          </NavLink>
        </li>
        {isUserSignedIn && (
          <li>
            <NavLink to="/" onClick={onSignOut}>
              <p>Sign Out</p>
            </NavLink>
          </li>
        )}
      </nav>
    </header>
  );
};

export default Header;
