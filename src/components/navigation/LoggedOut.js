import React from "react";
import NavbarItem from "./NavbarItem";
import { Nav } from "react-bootstrap";

export default function LoggedOut() {
  return (
    <>
      <Nav>
        <NavbarItem path="/login" linkText="Inloggen" />
      </Nav>
    </>
  );
}
