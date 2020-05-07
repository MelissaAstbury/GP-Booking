import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";

import "./App.css";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/SignUp" component={SignUpPage} />
      <Redirect to="/" />
    </Switch>
  );
  return <React.Fragment>{routes}</React.Fragment>;
}

export default App;
