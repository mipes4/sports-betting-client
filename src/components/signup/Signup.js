import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Container, Button, Col } from "react-bootstrap";
import { signUp } from "../../store/user/actions";

export default function SignUp() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");
  const [totaalToto, setTotaalToto] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  function submitForm(event) {
    event.preventDefault();

    // Which data is needed to sign up a new user?
    // Check model/table in DB
    dispatch(
      signUp(
        userName,
        firstName,
        lastName,
        telNumber,
        email,
        club,
        password,
        totaalToto,
        isAdmin
      )
    );

    setUserName("");
    setFirstName("");
    setLastName("");
    setTelNumber("");
    setEmail("");
    setPassword("");
    setTotaalToto(true);
    setIsAdmin(false);
  }

  return (
    <div class="col-6 offset-3">
      <form>
        <h3>Maak een account voor een nieuw lid</h3>

        <Form.Group controlId="formBasicUserName">
          <Form.Control
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Gebruikersnaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Control
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Voornaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Achternaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicTelNumber">
          <Form.Control
            value={telNumber}
            onChange={(event) => setTelNumber(event.target.value)}
            type="email"
            placeholder="Telefoonnummer"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Emailadres"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicClub">
          <Form.Control
            value={club}
            onChange={(event) => setClub(event.target.value)}
            type="text"
            placeholder="Favoriete club"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            label="Totaaltoto"
            checked={totaalToto}
            type="checkbox"
            onChange={() => setTotaalToto(!totaalToto)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            label="Admin"
            checked={isAdmin}
            type="checkbox"
            onChange={() => setIsAdmin(!isAdmin)}
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Aanmelden
          </Button>
        </Form.Group>
      </form>
    </div>
  );
}
