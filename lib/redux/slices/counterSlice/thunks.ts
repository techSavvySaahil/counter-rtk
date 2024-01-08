/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  () => {
    // update only if currentValue is odd
  };
