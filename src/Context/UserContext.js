import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = localStorage.getItem("token") || false;
  const [isUserSignedIn, setIsUserSignedIn] = useState(initialState);
  const [userId, setUserId] = useState("");
  const [userToEdit, setUserToEdit] = useState(null);

  const history = useHistory();

  const onSignIn = async (email, password) => {
    try {
      const loginRes = await axios.post(
        "http://localhost:8081/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      const { tokenExpiration, token, userId } = loginRes.data;
      const expirationDate = new Date(
        new Date().getTime() + tokenExpiration * 1000
      );
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", userId);
      setUserId(userId);
      checkAuthTimeout(tokenExpiration);

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
    localStorage.removeItem("appointments");
    setUserId("");
    setIsUserSignedIn(null);
  };

  const checkAuthTimeout = (experationTime) => {
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

  const onSignUp = async (userInfo) => {
    try {
      const signUpRes = await axios.post(
        "http://localhost:8081/api/user/signup",
        {
          userInfo,
        }
      );
      console.log(signUpRes);
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
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
        userToEdit,
        setUserToEdit,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
