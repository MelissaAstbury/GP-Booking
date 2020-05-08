import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { UserContext } from "../../Context/UserContext/UserContext";

const Header = () => {
  const { isUserSignedIn } = useContext(UserContext);
  return (
    <div className="header">
      <NavLink to="/">
        <p>GP</p>
      </NavLink>
      {!isUserSignedIn && (
        <NavLink to="signin">
          <p>Sign In</p>
        </NavLink>
      )}
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
