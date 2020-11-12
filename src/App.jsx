import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Login/components/SignUp";

export default function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route path="/">
            <SignUp />
          </Route>
          <Route path="/login"></Route>
          <Route path="/profile"></Route>
        </Switch>
      </Router>
    </section>
  );
}
