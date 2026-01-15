import React, { useEffect, useState } from "react";
import { useRef } from "react";

const HookRef = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const prevCount = useRef(0);
  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  return (
    <>
      <div>
        <h1>useRef Example</h1>
        <li className="text-justify mt-5 mb-5">
          use ref is use to access the dom directly and presist the value during
          re-render.we can change the value of useref without re-render
        </li>
        <input
          type="text"
          ref={inputRef}
          placeholder="Focus Input"
          className="border-2 border-amber-400 px-4 py-2 rounded-md mt-5 mb-5"
        />
        <p className="mb-3">Current: {count}</p>
        <p className="mb-3">Previous: {prevCount.current}</p>
        <button
          className="border-2 border-green-500"
          onClick={() => setCount((c) => c + 1)}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default HookRef;
