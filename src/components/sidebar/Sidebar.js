import React from "react";
// Styles
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <nav
      id="navbar-games"
      class="navbar bg-light flex-column sidebar__container"
      style={{ opacity: 0.3 }}
    >
      <a class="navbar-brand" href="#">
        Sign up new user
      </a>
      <a class="navbar-brand" href="#">
        Update data
      </a>
      <a class="navbar-brand" href="#">
        Change toto status
      </a>
      <a class="navbar-brand" href="#">
        Other
      </a>
    </nav>
  );
}
