import React from "react";

export default function Item({ todo, toggleTodo }) {
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={() => toggleTodo(todo.id)}
        className="w-6"
        type="checkbox"
        name="status"
        id="status"
        checked={todo.completed}
      />
      <p
        className={`text-lg font-medium  ${
          todo.completed ? "line-through text-[#33333]" : "text-black"
        }`}
      >
        {todo.description}
      </p>
    </div>
  );
}
