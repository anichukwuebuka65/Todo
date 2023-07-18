import React from "react";

export default function Item({ todo, toggleTodo }) {
  return (
    <div>
      <label htmlFor={`status${todo.id}`} className="flex items-center gap-2">
        <input
          onChange={() => toggleTodo(todo.id)}
          className="h-6 w-6"
          type="checkbox"
          name="status"
          id={`status${todo.id}`}
          checked={todo.completed}
        />
        <p
          className={`text-lg font-medium  ${
            todo.completed ? "line-through text-[#33333]" : "text-black"
          }`}
        >
          {todo.description}
        </p>
      </label>
    </div>
  );
}
