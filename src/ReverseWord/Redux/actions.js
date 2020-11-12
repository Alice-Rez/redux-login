const INPUT = "INPUT";

const REVERSE = "REVERSE";

const CLEAR = "CLEAR";

export function getInput(value) {
  return {
    type: INPUT,
    payload: value,
  };
}

export function reverseString() {
  return {
    type: REVERSE,
  };
}
export function clearInput() {
  return {
    type: CLEAR,
  };
}
