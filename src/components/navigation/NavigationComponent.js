import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
// components
import LoggedIn from "./LoggedIn";
// styles
import { Navbar } from "react-bootstrap";

export default function NavigationComponent() {
  const token = useSelector(selectToken);
  const renderControlsLoggedIn = token ? <LoggedIn /> : null;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Navbar.Brand>Sports Betting</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {token && renderControlsLoggedIn}
      </Navbar.Collapse>
    </Navbar>
  );
}
