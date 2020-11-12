import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.loggedUser);
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>You are successfully logged in!</p>
    </div>
  );
}
