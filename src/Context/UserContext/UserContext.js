import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const mockEmail = "test@email.com";
  const mockPassword = "password";
  const history = useHistory();

  const onSignIn = (email, password) => {
    if (email === mockEmail && password === mockPassword) {
      setIsUserSignedIn(true);
      history.push("/");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isUserSignedIn,
        onSignIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
