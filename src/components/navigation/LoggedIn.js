import React from "react";
import { useDispatch, useSelector } from "react-redux";
// redux
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
        {user.team && <img src={user.team.logo} style={{ width: "50px" }} />}
        <NavDropdown
          title={`Welkom ${user.username}`}
          id="collasible-nav-dropdown"
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
      <Nav variant="pills" className="mr-auto">
        <NavbarItem path="/" exact={true} linkText="Home" />
        <NavbarItem path="/voorspellingen" linkText="Voorspellingen" />
        <NavbarItem path="/regels" linkText="Regels" />
      </Nav>
      {renderDropDown()}
    </>
  );
}
