import React, { useEffect } from "react";
import { Card, Accordion, Button, Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function Regels() {
  const token = useSelector(selectToken);
  const history = useHistory();

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
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Het aantal goals per team goed voorspeld: 2 punten (dus 2x 2
                  punten te verdienen)
                </ListGroup.Item>
                <ListGroup.Item>
                  Een winner of gelijkspel goed voorspeld: 5 punten
                </ListGroup.Item>
                <ListGroup.Item>
                  Een volledige uitslag goed voorspeld: 1 punt
                </ListGroup.Item>
                <ListGroup.Item>
                  De punten tellen op, dus als de gehele uitslag goed is
                  voorspeld verdien je in totaal 10 punten.
                </ListGroup.Item>
              </ListGroup>
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
