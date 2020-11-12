import { createStore } from "redux";
import reducer from "./reducer.js";

const myStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;
