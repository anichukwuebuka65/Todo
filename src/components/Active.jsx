import React from "react";
import Item from "./Item";

export default function Active({ children, activeTodos, toggleTodo }) {
  return (
    <div>
      {children}
      <div>
        {activeTodos.map((todo) => (
          <div key={todo.id} className="mb-6">
            <Item {...{ todo, toggleTodo }} />
          </div>
        ))}
      </div>
    </div>
  );
}
