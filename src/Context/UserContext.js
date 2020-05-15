import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("auth")) || false;
  const [isUserSignedIn, setIsUserSignedIn] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isUserSignedIn));
  }, [isUserSignedIn]);

  // const mockEmail = "test@email.com";
  // const mockPassword = "password";
  const history = useHistory();

  const onSignIn = async (email, password) => {
    try {
      let res = await axios.post("http://localhost:8081/api/user/login", {
        email: email,
        password: password,
      });
      let data = res.data;
      console.log(data);
      setIsUserSignedIn(true);
      history.push("/");
    } catch (err) {
      alert("Email or password is incorrect");
    }
  };

  const onSignOut = () => {
    setIsUserSignedIn(false);
  };

  const onSignUp = (userInfo) => {
    console.log(userInfo);
    history.push("/signin");
  };

  return (
    <UserContext.Provider
      value={{
        isUserSignedIn,
        onSignIn,
        onSignOut,
        onSignUp,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
