import React from "react";

import Appointment from "../../components/Appointment/Appointment";

const InboxPage = () => {
  // useEffect(() => {
  // fetch("http://localhost:8081/api/user")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // }, []);

  return (
    <div>
      <Appointment />
    </div>
  );
};

export default InboxPage;
