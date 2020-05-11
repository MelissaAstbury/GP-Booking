import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import SignInPage from "./containers/SignInPage/SignInPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import CustomerProfilePage from "./containers/CustomerProfilePage/CustomerProfilePage";
import BookAppointmentPage from "./containers/BookAppointmentPage/BookAppointmentPage";
import UserContextProvider from "./Context/UserContext";
import "./App.scss";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/customerprofile" component={CustomerProfilePage} />
      <Route path="/bookappointment" component={BookAppointmentPage} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <UserContextProvider>
      <Header />
      <div className="wrapper">{routes}</div>
    </UserContextProvider>
  );
};

export default App;
