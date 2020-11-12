const initialState = {
  input: "",
  reversed: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, input: action.payload };
    case "REVERSE":
      let reversedString = state.input.split("").reverse().join("");
      return { ...state, reversed: reversedString };
    case "CLEAR":
      return { ...state, input: "" };
    default:
      return state;
  }
};

export default reducer;
