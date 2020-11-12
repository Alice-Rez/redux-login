import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../redux/actions";
import { Redirect } from "react-router";

export default function LogIn() {
  const [user, setUser] = useState({});
  const logged = useSelector((state) => state.loggedUser);

  const dispatch = useDispatch();

  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      {logged ? <Redirect to="/profile" /> : null}
      <Form>
        <h1 className="text-success">LogIn</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onInput={getValue}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="pwd"
            onInput={getValue}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(logIn(user));
          }}
        >
          Login
        </Button>
      </Form>
    </React.Fragment>
  );
}
