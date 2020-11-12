import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Appreverse";
import App from "./App";
import { Provider } from "react-redux";
// import myStore from "./ReverseWord/Redux/store.js";
import myStore from "./Login/redux/store";

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
