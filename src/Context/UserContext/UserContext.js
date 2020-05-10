import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("auth")) || false;
  const [isUserSignedIn, setIsUserSignedIn] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isUserSignedIn));
  }, [isUserSignedIn]);

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

  const onSignOut = () => {
    setIsUserSignedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isUserSignedIn,
        onSignIn,
        onSignOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
