const ADD_USER = "ADD_USER";

const LOG_IN = "LOG_IN";

const LOG_OUT = "LOG_OUT";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function logIn(loginData) {
  return {
    type: LOG_IN,
    payload: loginData,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
