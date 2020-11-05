export const CHANGE = "CHANGE";

export default function changeCounter(value) {
  return {
    type: CHANGE,
    payload: value,
  };
}
