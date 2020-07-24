import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { Button, NavDropdown, Nav } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Nav variant="pills" style={{ width: "100%" }} fill>
        <NavbarItem path={`/voorspellingen`} linkText="Voorspellingen" />
        <NavbarItem path="/regels" linkText="Regels" />
      </Nav>
      <Nav>
        <NavDropdown
          title={`Welkom ${user.frontName}`}
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item href="/profiel">Profiel</NavDropdown.Item>
          <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
        </NavDropdown>
        <Button onClick={() => dispatch(logOut())}>Afmelden</Button>
      </Nav>
    </>
  );
}
