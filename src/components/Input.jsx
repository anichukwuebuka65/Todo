import React, { useState } from "react";

export default function Input({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState("");

  function handleTodo(e) {
    e.preventDefault();

    if (!todo) {
      return setErr("Todo can not be empty!");
    }
    addTodo(todo);
    setTodo("");
  }

  function handleChange(e) {
    if (err) {
      setErr("");
    }

    setTodo(e.target.value);
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleTodo} className="flex gap-4 ">
        <label className="hidden" htmlFor="todo">
          todo
        </label>
        <input
          value={todo}
          onChange={(e) => handleChange(e)}
          className="grow outline-slate-400 border border-[#BDBDBD] rounded-xl px-3 text-sm font-normal text-[#828282]"
          type="text"
          name="todo"
          id="todo"
          placeholder="add details"
        />
        <button
          className="bg-[#2F80ED] rounded-xl text-white text-sm shadow-md px-10 py-4"
          type="submit"
        >
          Add
        </button>
      </form>
      {err && <p className="text-sm text-red-600">{err}</p>}
    </div>
  );
}
