import React from "react";
// styles
import { Form } from "react-bootstrap";

export default function ClubPreference({ teams, addTeam }) {
  return (
    <Form.Group controlId="formBasicClub">
      <Form.Label>Favoriete club</Form.Label>
      {teams && (
        <Form.Control
          as="select"
          required
          onChange={(e) => addTeam(e.target.value)}
          defaultValue=""
        >
          <option></option>
          {teams.map((team, i) => (
            <option key={i}>{team.name}</option>
          ))}
        </Form.Control>
      )}
    </Form.Group>
  );
}
