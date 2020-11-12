import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.loggedUser.name);
  return (
    <div>
      <h1>Welcome {user}</h1>
      <p>You are successfully logged in!</p>
    </div>
  );
}
