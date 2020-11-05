import { createStore } from "redux";
import counterReducer from "./reducer.js";

const myStore = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;
