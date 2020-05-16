import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = localStorage.getItem("token") || false;
  const [isUserSignedIn, setIsUserSignedIn] = useState(initialState);
  const [userId, setUserId] = useState("");

  const history = useHistory();

  const onSignIn = async (email, password) => {
    try {
      let res = await axios.post("http://localhost:8081/api/user/login", {
        email: email,
        password: password,
      });
      const expirationDate = new Date(
        new Date().getTime() + res.data.tokenExpiration * 1000
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", res.data.userId);
      checkAuthTimeout(res.data.tokenExpiration);

      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Email or password is incorrect");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
    setIsUserSignedIn(null);
  };

  const checkAuthTimeout = (experationTime) => {
    console.log(experationTime);
    setTimeout(() => {
      logout();
    }, experationTime * 1000);
  };

  const authCheckState = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        logout();
      } else {
        const userId = localStorage.getItem("userId");
        setUserId(userId);
        setIsUserSignedIn(token);
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        );
      }
    }
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
        logout,
        onSignUp,
        authCheckState,
        userId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
