import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { addUser } from "../redux/actions";

export default function SignUp() {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      {redirect ? <Redirect to="/login" /> : null}
      <Form>
        <h1 className="text-primary">Sign-up</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="name"
            onInput={getValue}
          />
        </Form.Group>
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
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addUser(user));
            setRedirect(true);
          }}
        >
          Register
        </Button>
      </Form>
    </React.Fragment>
  );
}
