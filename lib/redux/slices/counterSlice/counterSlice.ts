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
    // increment, decreament, incrementByAmount loginc here
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
