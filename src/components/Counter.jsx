import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleAddValue = () => {
    dispatch(increment(50));
  };
  const handleMinusValue = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex justify-center items-center gap-4 ">
      <button className="p-3 text-3xl bg-gray-400" onClick={handleMinusValue}>
        -
      </button>
      <h1 className="text-6xl">{counterValue}</h1>
      <button className="p-3 text-3xl bg-gray-400" onClick={handleAddValue}>
        +
      </button>
    </div>
  );
};

export default Counter;
