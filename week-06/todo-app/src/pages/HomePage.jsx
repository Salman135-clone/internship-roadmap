import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import ListItem from "../components/ListItem";
import ItemFilter from "../components/ItemFilter";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      task: text,
      status: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteHandle = (id) => {
    const updateTodos = todos.filter((x) => x.id !== id);
    setTodos(updateTodos);
  };

  const statusComplete = (id) => {
    setTodos((prev) =>
      prev.map((x) => (x.id === id ? { ...x, status: !x.status } : x))
    );
  };

  const filterData = (type) => {
    console.log(type);
    const filterResult =
      type === "all"
        ? todos
        : todos.filter((x) => {
            if (type === "incomplete") {
              return x.status === false;
            }
            if (type === "complete") {
              return x.status === true;
            }
          });
    setFilterTodos(filterResult);
  };

  useEffect(() => {
    setFilterTodos(todos);
  }, [todos]);

  return (
    <>
      <div className="h-screen flex justify-center items-center px-2 py-5">
        <div className=" rounded-md p-4 w-full max-w-3xl mt-4 ">
          <div className="mb-6 ">
            <h1 className="font-bold text-4xl text-primary">To-Do List</h1>
          </div>
          <section className="mb-6">
            <TextInput onAdd={onAdd} />
          </section>
          <section>
            <ItemFilter filter={filterData} />
          </section>
          <section className="max-h-96 overflow-y-auto ">
            <div></div>
            {filterTodos.length > 0 ? (
              filterTodos.map((todo) => (
                <ListItem
                  key={todo.id}
                  text={todo.task}
                  id={todo.id}
                  status={todo.status}
                  deleteTodo={deleteHandle}
                  markTodo={statusComplete}
                />
              ))
            ) : (
              <p className="text-center bg-gray-900 text-2xl py-4 rounded-md font-semibold ">
                Nothing Added in List Yet
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
