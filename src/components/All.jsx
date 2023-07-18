import React from "react";
import Item from "./Item";

export default function All({ children, todos, toggleTodo }) {
  return (
    <div>
      {children}
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="mb-6">
            <Item {...{ todo, toggleTodo }} />
          </div>
        ))}
      </div>
    </div>
  );
}
