import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Login/components/LogIn";
import Profile from "./Login/components/Profile";
import SignUp from "./Login/components/SignUp";

export default function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}
