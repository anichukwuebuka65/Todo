import React from "react";
import Item from "./Item";

export default function Completed({
  completedTodos,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
}) {
  return (
    <div>
      {completedTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center mb-5 pr-3.5"
        >
          <Item {...{ todo, toggleTodo }} />
          <button onClick={() => deleteTodo(todo.id)}>
            <img className="w-6 text-[#BDBDBD]" src={"assets/delete.png"} />
          </button>
        </div>
      ))}
      <div className="flex justify-end mt-8">
        <button
          onClick={deleteCompletedTodos}
          className="bg-[#EB5757] text-xs text-white rounded-lg px-6 py-3"
        >
          <img className="inline w-2 mr-1.5" src="assets/delete2.png" alt="" />
          delete all
        </button>
      </div>
    </div>
  );
}
