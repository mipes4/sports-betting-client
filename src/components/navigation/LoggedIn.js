import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const goto = (path) => {
    history.push(path);
  };

  const renderDropDown = () => {
    return (
      <Nav>
        {
          <img
            src={user.team.logo}
            style={{ width: "50px" }}
            alt="logo favorite team"
          />
        }
        <NavDropdown
          title={`Welkom ${user.username}`}
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item onClick={() => goto("/profiel")}>
            Profiel
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => goto("/voorspellingen")}>
            Voorspellingen
          </NavDropdown.Item>
          {user.admin && (
            <NavDropdown.Item onClick={() => goto("/admin")}>
              Admin
            </NavDropdown.Item>
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
        <NavbarItem path="/regels" linkText="Regels" />
      </Nav>
      {user.id && renderDropDown()}
    </>
  );
}
