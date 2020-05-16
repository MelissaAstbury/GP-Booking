import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const { isUserSignedIn, logout } = useContext(UserContext);
  return (
    <header>
      <nav>
        <div className="logo">
          <li>
            <NavLink to="/">
              <p>Mel GP</p>
            </NavLink>
          </li>
        </div>
        <div className="nav-options">
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
              <NavLink to="appointment">
                <p>Appointments</p>
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
              <NavLink to="/" onClick={logout}>
                <p>Sign Out</p>
              </NavLink>
            </li>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
