import React from "react";
import { useState } from "react";

const HookState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count == 0) {
      return alert("value can't be negative");
    }
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-5 items-center ">
      <h1>useState Example</h1>
      <pre>
        <code>{`Count Value: ${count}`}</code>
      </pre>
      <div className="flex gap-4">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </div>
  );
};

export default HookState;
