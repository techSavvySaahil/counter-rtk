/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // incrementing counter value
    increment: (state, action) => {
      state.value++;
    },
    // decrementing counter value
    decrement: (state, action) => {
      state.value--;
    },
    // incrementing counter value with user-defined input
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
