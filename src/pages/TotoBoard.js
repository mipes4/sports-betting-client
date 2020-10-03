import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// redux
import { fetchPredictions } from "../store/predictions/actions";
import { selectPredictions } from "../store/predictions/selectors";
// styles
import { Table, Container } from "react-bootstrap";

export default function TotoBoard() {
  const dispatch = useDispatch();
  const { totoScores } = useSelector(selectPredictions);
  console.log("totoScores:", totoScores);
  useEffect(() => {
    dispatch(fetchPredictions);
  }, [dispatch]);

  return (
    <Container>
      <h1 className="my-5">Toto Scores</h1>
      <Table variant="dark" striped bordered hover size="xsm">
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {totoScores.map((score, i) => {
            return (
              <tr key={i}>
                <td>{score.user.username}</td>
                <td>{score.totalScore}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
