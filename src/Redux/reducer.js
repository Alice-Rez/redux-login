const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ICR":
      return { ...state, counter: state.counter + action.payload };
    case "DCR":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

export default counterReducer;
