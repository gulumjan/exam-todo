import React from "react";
import AddTodo from "./add-todo/AddTodo";
import TodoList from "./todo-list/TodoList";

const HomePage = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default HomePage;
