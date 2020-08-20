import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
// components
import NavbarItem from "./NavbarItem";
// styles
import { Button, NavDropdown, Nav } from "react-bootstrap";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const renderDropDown = () => {
    return (
      <Nav>
        <NavDropdown
          title={`Welkom ${user.username}`}
          id="collasible-nav-dropdown"
          style={{
            margin: "0 2rem",
          }}
        >
          <NavDropdown.Item href="/profiel">Profiel</NavDropdown.Item>
          {user.admin && (
            <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
          )}
        </NavDropdown>
        <Button onClick={() => dispatch(logOut())}>Afmelden</Button>
      </Nav>
    );
  };

  return (
    <>
      <Nav variant="pills" style={{ width: "100%" }} fill>
        <NavbarItem path="/" exact={true} linkText="Home" />
        <NavbarItem path="/voorspellingen" linkText="Voorspellingen" />
        <NavbarItem path="/regels" linkText="Regels" />
      </Nav>
      {renderDropDown()}
    </>
  );
}
