import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken, selectUser } from "../../store/user/selectors";
import { changeUser } from "../../store/user/actions";
// styles
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import ClubPreference from "../ClubPreference/ClubPreference";
import { fetchTeams } from "../../store/configs/actions";
import { selectTeams } from "../../store/configs/selectors";

export default function Profiel() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [frontName, setFrontName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState();
  const [club, setClub] = useState("");
  const [totaalToto, setTotaalToto] = useState();
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const teams = useSelector(selectTeams);
  console.log("user:", user);
  useEffect(() => {
    dispatch(fetchTeams);
  }, []);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  if (!user.email) return <p>Loading...</p>;

  function submitForm(event) {
    event.preventDefault();

    const favTeamSelected = teams.find((t) => t.name === club);

    dispatch(
      changeUser(
        user.id,
        userName,
        user.email,
        frontName,
        lastName,
        phone,
        favTeamSelected.id,
        totaalToto
        // password
      )
    );
    setPassword("");
  }

  return (
    <Container>
      <form>
        <Form.Group as={Row} controlId="formHorizontalFrontName">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              defaultValue={user.firstName}
              type="text"
              onChange={(event) => setFrontName(event.target.value)}
              placeholder="Voornaam"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicLastName">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              defaultValue={user.lastName}
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Achternaam"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicUser">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              defaultValue={user.username}
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              required
              placeholder="Gebruikersnaam"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              defaultValue={user.email}
              type="email"
              required
              placeholder="Email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPhone">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              defaultValue={user.phoneNumber}
              type="tel"
              onChange={(event) => setPhone(event.target.value)}
              required
              placeholder="Telefoonnummer"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicToto">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Check
              label="Ik doe mee met de totaaltoto"
              defaultChecked={user.totaalToto}
              type="checkbox"
              onChange={(event) => setTotaalToto(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Wachtwoord"
              required
            />
          </Col>
        </Form.Group>

        {/* wv: hardcoded for now in the future we can make this a selector */}
        <Form.Group as={Row} controlId="formBasicClub">
          <Col sm={{ span: 6, offset: 3 }}>
            <ClubPreference
              defValue={user.team.name}
              teams={teams}
              addTeam={(name) => setClub(name)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-5">
          <Col sm={{ span: 6, offset: 3 }}>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sla mijn profiel op
            </Button>
          </Col>
        </Form.Group>
      </form>
    </Container>
  );
}
