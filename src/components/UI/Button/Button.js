import React from "react";

import "./Button.scss";

const Button = (props) => (
  <div
    className={["button", [props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </div>
);

export default Button;
