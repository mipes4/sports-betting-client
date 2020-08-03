import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Form, Container, Button, Col } from "react-bootstrap";
import { signUp } from "../../store/user/actions";
import { selectToken, selectUser } from "../../store/user/selectors";

export default function SignUp() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();

    // Which data is needed to sign up a new user?
    // Check model/table in DB
    dispatch(signUp(userName, firstName, lastName, telNumber, email, password));

    setUserName("");
    setFirstName("");
    setLastName("");
    setTelNumber("");
    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h3>Nieuw lid</h3>

        <Form.Group controlId="formBasicName">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Enter user name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Voornaam</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter firstname"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Achternaam</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Enter lastname"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Telefoonnummer</Form.Label>
          <Form.Control
            value={telNumber}
            onChange={(event) => setTelNumber(event.target.value)}
            type="email"
            placeholder="Enter telephone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Emailadres</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Enter email address"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Aanmelden
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
