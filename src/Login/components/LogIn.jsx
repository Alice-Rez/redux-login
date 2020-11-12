import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../redux/actions";

export default function LogIn() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  let history = useHistory();

  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
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
      <button
        onClick={() => {
          if (logged) {
            history.push("/profile");
          }
        }}
      >
        Go to profile
      </button>
    </Form>
  );
}
