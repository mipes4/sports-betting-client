import React from "react";
// Styles
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__container--control">Sign up</div>
      <div className="sidebar__container--control">Update data</div>
      <div className="sidebar__container--control">Change toto status</div>
      <div className="sidebar__container--control">Other</div>
    </div>
  );
}
