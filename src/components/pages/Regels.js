import React, { useEffect } from "react";
import { Card, Accordion, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function Regels() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <Container md={{ span: 8, offset: 2 }}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h2>Hoeveel punten kan ik verdienen per wedstrijd?</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  Het aantal goals per team goed voorspeld: 2 punten (dus 2x 2
                  punten te verdienen)
                </li>
                <li>Een winner of gelijkspel goed voorspeld: 5 punten</li>
                <li>Een volledige uitslag goed voorspeld: 1 punt</li>
                <p>
                  De punten tellen op, dus als de gehele uitslag goed is
                  voorspeld verdien je in totaal 10 punten.
                </p>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <h2>Hoeveel totorondes worden er gespeeld?</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Er worden in totaal 11 totorondes per seizoen gespeeld. Elke
              totoronde duurt 3 speelrondes. Behalve de laatste totoronde, die
              bestaat uit 4 speelrondes.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <h2>Wat is de totaaltoto?</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Naast de reguliere totorondes, is er ook een Totaaltoto. Dit is
              een aparte toto dat bestaat uit alle 34 speelrondes. Degene die
              aan het eind de meeste punten heeft verdiend, wint de Totaaltoto.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <h2>Wanneer ben je de winnaar van de toto?</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Na afloop van de laatste speelronde van een spel worden alle
              punten bij elkaar opgeteld. Degene met de meeste punten wint.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <h2>Wat gebeurt er als ik mijn punten niet heb ingezet?</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Wanneer een speler geen voorspelling heeft gedaan dan wordt er
              géén score genoteerd. Er zijn dan ook geen punten te behalen op
              deze wedstrijd.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
