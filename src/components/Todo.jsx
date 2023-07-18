import React, { useState } from "react";
import Nav from "./Nav";
import All from "./All";
import Active from "./Active";
import Completed from "./Completed";
import Input from "./Input";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Do coding challenges", completed: false },
    { id: 2, description: "Do coding challenges", completed: false },
    { id: 3, description: "Do coding challenges", completed: true },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const completedTodos = todos.filter((todo) => todo.completed);
  const activeTodos = todos.filter((todo) => !todo.completed);

  const tabComponents = {
    all: (
      <All {...{ todos, toggleTodo }}>
        <Input {...{ addTodo }} />
      </All>
    ),
    active: (
      <Active {...{ activeTodos, toggleTodo }}>
        <Input {...{ addTodo }} />
      </Active>
    ),
    completed: (
      <Completed
        {...{ completedTodos, toggleTodo, deleteTodo, deleteCompletedTodos }}
      />
    ),
  };

  function getTab() {
    return tabComponents[activeTab];
  }

  function toggleTodo(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000),
        completed: false,
        description: todo,
      },
    ]);
  }

  function deleteCompletedTodos() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className="flex justify-center text-[#333]">
      <div className="grow max-w-[600px]">
        <h1 className="text-4xl text-center font-[Raleway] font-bold mt-8 mb-14">
          #todo
        </h1>
        <Nav {...{ activeTab, setActiveTab }} />
        {getTab()}
      </div>
    </div>
  );
}
