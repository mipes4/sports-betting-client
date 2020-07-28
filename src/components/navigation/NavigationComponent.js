import React from "react";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";

export default function NavigationComponent() {
  const token = useSelector(selectToken);

  const renderControlsLoggedIn = token ? <LoggedIn /> : null;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Sports Betting</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {renderControlsLoggedIn}
      </Navbar.Collapse>
    </Navbar>
  );
}
