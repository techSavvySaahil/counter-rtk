"use client";

/* Core */
import { useRef } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";
import styles from "./counter.module.css";
import { counterSlice, incrementIfOddAsync } from "@/lib/redux/slices";

export const Counter = () => {
  // Create a state named incrementAmount

  // For most of the scenarios with input elements,
  // we use refs instead of states
  // as the refs don't cause rerenders
  const inputRef = useRef(null);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const { increment, decrement, incrementByAmount } = counterSlice.actions;

  // Creating common function for incrementing count (counter's current value) 
  // by user input amount with and without condition
  const incrementAmountConditionally = (checkCondition: boolean) => {
    if (inputRef && inputRef.current) {
      const { value = "" } = inputRef.current;
      const amount = parseInt(value);
      if (checkCondition) {
        // dispatching event to add incrementAmount only if count is odd
        dispatch(incrementIfOddAsync(amount));
      } else {
        // dispatching event to add incrementAmount to count
        dispatch(incrementByAmount(amount));
      }
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatching event to decrease count by 1
            dispatch(decrement(1));
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatching event to increment count by 1
            dispatch(increment(1));
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input ref={inputRef} className={styles.textbox} aria-label="Set increment amount" />
        <button
          className={styles.button}
          onClick={() => {
            incrementAmountConditionally(false)
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            incrementAmountConditionally(true)
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
