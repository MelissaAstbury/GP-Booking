import React from "react";

import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <p>GP</p>
      </NavLink>
      <NavLink to="signin">
        <p>Sign In</p>
      </NavLink>
      <NavLink to="signup">
        <p>Sign Up</p>
      </NavLink>
      <NavLink to="contact">
        <p>Contact Us</p>
      </NavLink>
    </div>
  );
};

export default Header;
