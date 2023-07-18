import React from "react";

export default function Nav({ activeTab, setActiveTab }) {
  const translateBy = {
    all: "0px",
    active: "40%",
    completed: "82.5%",
  };

  return (
    <div className="overflow-hidden">
      <nav className="relative px-12 border-b border-b-[#BDBDBD] mb-4">
        <ul className="flex justify-between pb-3">
          <li className="min-w-[80px] text-center font-semibold">
            <button onClick={() => setActiveTab("all")}>All</button>
          </li>
          <li className="min-w-[80px] text-center font-semibold">
            <button onClick={() => setActiveTab("active")}>Active</button>
          </li>
          <li className="min-w-[80px] text-center font-semibold">
            <button onClick={() => setActiveTab("completed")}>Completed</button>
          </li>
        </ul>
        <div
          style={{
            transform: `translateX(${translateBy[activeTab]})`,
            transition: "transform 300ms",
          }}
        >
          <div className=" absolute bottom-[-0.5px] bg-[#2F80ED] w-[89px] h-1 rounded-[4px_4px_0px_0px] overflow-hidden"></div>
        </div>
      </nav>
    </div>
  );
}
