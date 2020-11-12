const initialState = {
  users: [],
  loggedUser: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOG_IN":
      let logged = state.users.filter(
        (user) =>
          user.email === action.payload.email && user.pwd === action.payload.pwd
      );
      if (logged.length > 0) {
        return {
          ...state,
          loggedUser: logged,
          error: false,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }

    case "LOG_OUT":
      return {
        ...state,
        loggedUser: false,
      };

    default:
      return state;
  }
};

export default reducer;
