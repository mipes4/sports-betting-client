import React, { useState, useEffect } from "react";
// styles
import { Form } from "react-bootstrap";

export default function ClubPreference({ teams }) {
  return (
    <Form.Group controlId="formBasicClub">
      <Form.Label>Favoriete club</Form.Label>
      <Form.Control as="select" required>
        {teams && teams.map((team, i) => <option key={i}>{team.name}</option>)}
      </Form.Control>
    </Form.Group>
  );
}
