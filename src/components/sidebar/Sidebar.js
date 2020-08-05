import React from "react";
// Styles
import "./Sidebar.scss";

export default function Sidebar({ onSelect, tasks }) {
  return (
    <nav
      id="navbar-games"
      className="navbar bg-light flex-column sidebar__container"
      style={{ opacity: 0.3 }}
    >
      {tasks.map((task, i) => (
        <button
          key={i}
          className="navbar-brand sidebar__btn"
          href="#"
          onClick={() => onSelect(task)}
        >
          {task}
        </button>
      ))}
    </nav>
  );
}
