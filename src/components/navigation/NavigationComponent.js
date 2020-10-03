import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
// assets
import ball from "../../assets/football.png";
// components
import LoggedIn from "./LoggedIn";
// styles
import { Navbar } from "react-bootstrap";

export default function NavigationComponent() {
  const token = useSelector(selectToken);
  const renderControlsLoggedIn = token ? <LoggedIn /> : null;

  return (
    <Navbar href="#home" collapseOnSelect bg="light" expand="lg">
      <img src={ball} style={{ width: "50px" }} />
      &nbsp;
      <Navbar.Brand>Sports Betting</Navbar.Brand>
      {token && (
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {renderControlsLoggedIn}
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}
