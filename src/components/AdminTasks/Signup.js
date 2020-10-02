import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { signUp } from "../../store/user/actions";
import { fetchTeams } from "../../store/configs/actions";
import { selectTeams } from "../../store/configs/selectors";
import ClubPreference from "../ClubPreference/ClubPreference";
// styles
import { Form, Button } from "react-bootstrap";

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
  const teams = useSelector(selectTeams);

  console.log("club:", club);

  useEffect(() => {
    dispatch(fetchTeams);
  }, []);

  function submitForm(event) {
    event.preventDefault();
    // console.log("Userinput", userInput);
    // Which data is needed to sign up a new user?
    // Check model/table in DB
    console.log("Inisde sumbit");
    const favTeamSelected = teams.find((t) => t.name === club);
    dispatch(
      signUp(
        userName,
        firstName,
        lastName,
        telNumber,
        email,
        favTeamSelected.id,
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
    setClub("");
  }

  return (
    <div class="col-6 offset-3">
      <h3>Maak een account voor een nieuw lid</h3>
      <Form>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
            type="email"
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

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            inline
            label="Totaaltoto"
            checked={totaalToto}
            type="checkbox"
            onChange={() => setTotaalToto(!totaalToto)}
          />
          <Form.Check
            inline
            label="Admin"
            checked={isAdmin}
            type="checkbox"
            onChange={() => setIsAdmin(!isAdmin)}
          />
        </Form.Group>

        <Button
          className="m-2"
          variant="primary"
          type="submit"
          onClick={submitForm}
        >
          Aanmelden
        </Button>
      </Form>
    </div>
  );
}
