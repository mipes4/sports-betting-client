import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken, selectUser } from "../../store/user/selectors";
import { changeUser } from "../../store/user/actions";
// styles
import { Container, Form, Col, Button, Row } from "react-bootstrap";

export default function Profiel() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [frontName, setFrontName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState();
  const [totaalToto, setTotaalToto] = useState();
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  if (!user.email) return <p>Loading...</p>;

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      changeUser(
        user.id,
        userName,
        user.email,
        frontName,
        lastName,
        phone,
        totaalToto
        // password
      )
    );
    setPassword("");
  }

  return (
    <Container>
      <h1 className="mt-5 mb-5">Profiel</h1>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group as={Row} controlId="formHorizontalFrontName">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Voornaam
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              defaultValue={user.frontName}
              type="text"
              onChange={(event) => setFrontName(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicLastName">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Achternaam
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              defaultValue={user.lastName}
              type="text"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicUser">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Username
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              defaultValue={user.username}
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Emailadres
          </Form.Label>
          <Col sm={8}>
            <Form.Control defaultValue={user.email} type="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicPhone">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Telefoonnummer
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              defaultValue={user.phoneNumber}
              type="tel"
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicToto">
          <Col sm={{ span: 9, offset: 2 }}>
            <Form.Check
              label="Ik doe mee met de totaaltoto"
              defaultChecked={user.totaalToto}
              type="checkbox"
              onChange={(event) => setTotaalToto(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Form.Label style={{ textAlign: "left" }} column sm={3}>
            Wachtwoord
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Wachtwoord"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-5">
          <Col sm={{ span: 9, offset: 2 }}>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sla mijn profiel op
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
