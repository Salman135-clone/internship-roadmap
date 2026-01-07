import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const ListItem = ({ text, id, deleteTodo, markTodo, status }) => {
  const toggleChange = () => {
    markTodo(id);
  };
  return (
    <>
      <ul className="">
        <li className="flex items-center gap-3 mb-3 hover:bg-neutral-700 py-3 px-2 rounded-sm">
          <input
            type="checkbox"
            checked={status}
            onChange={toggleChange}
            className="w-4 h-4 border cursor-pointer accent-green-400"
          />
          <span
            className={`text-lg text-text ${
              status ? "line-through" : ""
            } -mt-1`}
          >
            {text}
          </span>
          <button
            onClick={() => deleteTodo(id)}
            className="flex items-center ml-auto mr-2 cursor-pointer hover:text-primary"
          >
            <MdOutlineDelete size={21} />
          </button>
        </li>
      </ul>
    </>
  );
};

export default ListItem;
