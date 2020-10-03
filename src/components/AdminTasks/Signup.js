import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { signUp } from "../../store/user/actions";
import { fetchTeams } from "../../store/configs/actions";
import { selectTeams } from "../../store/configs/selectors";
import ClubPreference from "../ClubPreference/ClubPreference";
// styles
import { Container, Form, Button } from "react-bootstrap";

export default function SignUp() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");
  const [totaalToto, setTotaalToto] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const teams = useSelector(selectTeams);

  useEffect(() => {
    dispatch(fetchTeams);
  }, []);

  function submitForm(event) {
    event.preventDefault();
    console.log(
      username,
      firstName,
      lastName,
      telNumber,
      email,
      getTeamId(club),
      password,
      totaalToto,
      isAdmin
    );
    dispatch(
      signUp(
        username,
        firstName,
        lastName,
        telNumber,
        email,
        getTeamId(club),
        password,
        totaalToto,
        isAdmin
      )
    );

    setUsername("");
    setFirstName("");
    setLastName("");
    setTelNumber("");
    setEmail("");
    setPassword("");
    setTotaalToto(true);
    setIsAdmin(false);
    setClub("");
  }

  function getTeamId(teamName) {
    return teams.find((team) => team.name === teamName).id;
  }

  return (
    <Container>
      <h3>Maak een account voor een nieuw lid</h3>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Gebruikersnaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>Voornaam</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Voornaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Achternaam</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Achternaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicTelNumber">
          <Form.Label>Telefoonnummer</Form.Label>
          <Form.Control
            value={telNumber}
            onChange={(event) => setTelNumber(event.target.value)}
            type="text"
            placeholder="Telefoonnummer"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Emailadres</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Emailadres"
            required
          />
        </Form.Group>

        <ClubPreference teams={teams} addTeam={(name) => setClub(name)} />

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

        <Form.Group controlId="formBasicCheckbox1">
          <Form.Check
            inline
            label="Totaaltoto"
            checked={totaalToto}
            type="checkbox"
            onChange={() => setTotaalToto(!totaalToto)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox2">
          <Form.Check
            inline
            label="Admin"
            checked={isAdmin}
            type="checkbox"
            onChange={() => setIsAdmin(!isAdmin)}
          />
        </Form.Group>

        <Button className="m-2" variant="primary" type="submit">
          Aanmelden
        </Button>
      </Form>
    </Container>
  );
}
