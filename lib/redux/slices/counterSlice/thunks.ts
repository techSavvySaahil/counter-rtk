/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from "./counterSlice";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
    (dispatch, getState) => {
      const state = getState();
    // update only if currentValue is odd
    if (state.counter.value % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
  };
