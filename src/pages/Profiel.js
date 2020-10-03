import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// redux
import { selectToken, selectUser } from "../store/user/selectors";
import { changeUser } from "../store/user/actions";
import { fetchTeams } from "../store/configs/actions";
import { selectTeams } from "../store/configs/selectors";
// components
import ClubPreference from "../components/ClubPreference/ClubPreference";
// styles
import { Container, Form, Button } from "react-bootstrap";

export default function Profiel() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [club, setClub] = useState();
  const [password, setPassword] = useState();
  const [totaalToto, setTotaalToto] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const teams = useSelector(selectTeams);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  useEffect(() => {
    dispatch(fetchTeams);
  }, []);

  if (!user.email) return <p>Loading...</p>;

  function submitForm(event) {
    event.preventDefault();

    const favTeamSelected = teams.find((t) => t.name === club);

    dispatch(
      changeUser(
        username,
        firstName,
        lastName,
        phoneNumber,
        email,
        getTeamId(club),
        password,
        totaalToto,
        isAdmin
      )
    );
    setPassword("");
  }

  function getTeamId(teamName) {
    return teams.find((team) => team.name === teamName).id;
  }

  return (
    user && (
      <Container>
        <Form onSubmit={submitForm}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>Gebruikersnaam</Form.Label>
            <Form.Control
              defaultValue={user.username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Gebruikersnaam"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Voornaam</Form.Label>
            <Form.Control
              defaultValue={user.firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder="Voornaam"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Achternaam</Form.Label>
            <Form.Control
              defaultValue={user.lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder="Achternaam"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicTelNumber">
            <Form.Label>Telefoonnummer</Form.Label>
            <Form.Control
              defaultValue={user.phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              type="text"
              placeholder="Telefoonnummer"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Emailadres</Form.Label>
            <Form.Control
              defaultValue={user.email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder="Emailadres"
              required
            />
          </Form.Group>

          <ClubPreference
            defaultVal={user.team.name}
            teams={teams}
            addTeam={(name) => setClub(name)}
          />

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              defaultValue=""
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
              defaultValue={user.totaalToto}
              onChange={() => setTotaalToto(!totaalToto)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox2">
            <Form.Check
              inline
              label="Admin"
              checked={isAdmin}
              type="checkbox"
              defaultValue={user.isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sla mijn profiel op
          </Button>
        </Form>
      </Container>
    )
  );
}
