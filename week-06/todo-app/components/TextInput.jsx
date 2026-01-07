import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";

const TextInput = ({ onAdd }) => {
  const [inputValue, setInputeValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue === "") return toast.warn("Input field cannot be empty");
    onAdd(inputValue);
    setInputeValue("");
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      handleAdd(e);
    }
  };
  return (
    <>
      <div className="flex flex-row gap-2 relative">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputeValue(e.target.value)}
          onKeyDown={keyDownHandler}
          className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/30 "
        />
        <button
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-green-600 hover:text-primary "
          onClick={handleAdd}
        >
          <CiCirclePlus size={40} />
        </button>
      </div>
    </>
  );
};

export default TextInput;
