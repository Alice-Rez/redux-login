import React from "react";
import { useDispatch, useSelector } from "react-redux";
import changeCounter from "../Redux/actions.js";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(changeCounter(-1))}> - </button>
      <input type="text" value={counter} />
      <button onClick={() => dispatch(changeCounter(1))}> + </button>
    </div>
  );
}
