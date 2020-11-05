export const ICR = "ICR";
export const DCR = "DCR";

export function increment() {
  return {
    type: ICR,
    payload: 1,
  };
}

export function decrement() {
  return {
    type: DCR,
    payload: -1,
  };
}
