import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// redux
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
// styles
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg={6}>
          <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Wachtwoord</Form.Label>
              <Form.Control
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Inloggen
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
