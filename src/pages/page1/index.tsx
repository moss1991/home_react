import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/counterSlice";

export default function Counter() {
  // `state` arg 已经正确被键入 `RootState`
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
