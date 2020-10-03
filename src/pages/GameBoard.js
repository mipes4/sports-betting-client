import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// redux
import { fetchGameScores } from "../store/predictions/actions";
import { selectPredictions } from "../store/predictions/selectors";
// styles
import { Table, Container } from "react-bootstrap";

export default function GameBoard() {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const { gameScores } = useSelector(selectPredictions);
  console.log("gameScores:", gameScores);
  useEffect(() => {
    dispatch(fetchGameScores(gameId));
  }, [dispatch, gameId]);
  return (
    <div>
      <Container>
        <h1 className="my-5">{`Game ${gameId} Scoreboard`}</h1>
        <Table variant="dark" striped bordered hover size="xsm">
          <thead>
            <tr>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {gameScores.map((score, i) => {
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
    </div>
  );
}
