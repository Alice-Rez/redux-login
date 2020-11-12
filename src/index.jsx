import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Appreverse";
import { Provider } from "react-redux";
// import myStore from "./ReverseWord/Redux/store.js";

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
