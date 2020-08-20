import React from "react";

export default function Sidebar({ onSelect, tasks }) {
  return (
    <div
      style={{
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        height: "20rem",
        justifyContent: "center",
        alignItems: "start",
        transform: "rotate(-10deg) translateY(-3rem)",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      {tasks.map((task, i) => (
        <button
          key={i}
          className="navbar-brand"
          onClick={() => onSelect(task)}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "#c7c7c7",
            fontWeight: "700",
          }}
        >
          {task}
        </button>
      ))}
    </div>
  );
}
