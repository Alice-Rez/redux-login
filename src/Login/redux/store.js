const { createStore } = require("redux");
const { default: reducer } = require("./reducer");

const myStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;
