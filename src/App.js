import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import SignInPage from "./containers/SignInPage/SignInPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import ContactPage from "./containers/ContactPage/ContactPage";

import "./App.css";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <React.Fragment>
      <Header />
      {routes}
    </React.Fragment>
  );
}

export default App;
