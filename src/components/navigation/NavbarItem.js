import React from "react";
import { NavLink } from "react-router-dom";
// styles
import { Nav } from "react-bootstrap";

export default function NavbarItem(props) {
  return (
    <div>
      <Nav.Item>
        <Nav.Link as={NavLink} exact={props.exact} to={props.path}>
          {props.linkText}
        </Nav.Link>
      </Nav.Item>
    </div>
  );
}
