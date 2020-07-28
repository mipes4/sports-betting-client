import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function NavigationComponent() {
  const token = useSelector(selectToken);

  const loginLogoutControls = !token ? null : <LoggedOut />;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Sports Betting</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {loginLogoutControls}
      </Navbar.Collapse>
    </Navbar>
  );
}
