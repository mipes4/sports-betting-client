import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPredictions } from "../../store/predictions/actions";
import { selectPredictions } from "../../store/predictions/selectors";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import {
  fetchCurrentGame,
  fetchCurrentRound,
} from "../../store/configs/actions";
import {
  selectCurrentGame,
  selectCurrentRound,
} from "../../store/configs/selectors";
import { fetchGameScores } from "../../store/predictions/actions";
import { fetchCurRoundMatchesAndPredictions } from "../../store/matches/actions";
import { selectUser } from "../../store/user/selectors";
import { selectCurrentRoundMatches } from "../../store/matches/selectors";
import MatchEntry from "../../components/matches/MatchEntry";
import { fetchScores } from "../../store/configs/actions";

export default function LeaderBoardRoundCard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  const { totoScores } = useSelector(selectPredictions);
  const gameId = useSelector(selectCurrentGame);
  const round = useSelector(selectCurrentRound);
  const { gameScores } = useSelector(selectPredictions);
  const currentMatches = useSelector(selectCurrentRoundMatches);
  const [topThreeScores, setTopThree] = useState([]);
  // console.log("currentMatches:", currentMatches);

  useEffect(() => {
    if (totoScores.length) {
      const topThree = totoScores.slice(0, 3);
      setTopThree(topThree);
    }
  }, [totoScores]);

  useEffect(() => {
    dispatch(fetchScores());

    dispatch(fetchPredictions);
    dispatch(fetchCurrentGame);
    dispatch(fetchCurrentRound);
  }, [dispatch]);

  useEffect(() => {
    if (gameId) {
      // console.log("gameId:", gameId);
      dispatch(fetchGameScores(gameId));
    }
  }, [gameId]);

  useEffect(() => {
    // console.log("round:", round);
    if (round) {
      dispatch(
        fetchCurRoundMatchesAndPredictions(user.id, round.replace(/\D/g, ""))
      );
    }
  }, [round, user.id]);

  const matchesToMatchEntry = currentMatches.map((match, i) => {
    return (
      <MatchEntry
        key={match.id}
        // color={newColor}
        color="white"
        fixtureId={match.id}
        homeTeamId={match.homeTeamId}
        homeTeamName={match.homeTeamName}
        homeTeamLogo={match.homeTeamLogo}
        goalsHomeTeam={match.goalsHomeTeam}
        awayTeamId={match.awayTeamId}
        awayTeamName={match.awayTeamName}
        awayTeamLogo={match.awayTeamLogo}
        goalsAwayTeam={match.goalsAwayTeam}
        eventTimestamp={match.eventTimeStamp}
        round={match.round.match(/\d+/)[0]}
        status={match.status}
        predictions={match.predictions}
        gameId={match.gameId}
      />
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-5">Top 3 of Toto Scores</h1>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {topThreeScores.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.user.username}</td>
                    <td>{score.totalScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={() => history.push(`/totoboard`)}>
            All Toto's Scores
          </Button>
        </Col>
        <Col>
          <h1 className="my-5">Top 3 of Current Game</h1>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
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
          <Button onClick={() => history.push(`/game/${gameId}`)}>
            All Scores of Current Game
          </Button>
        </Col>
      </Row>
      <h1 className="mt-5">{` ${round} Matches`}</h1>
      <Table
        style={{ fontSize: 12, textAlign: "left", verticalAlign: "middle" }}
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        responsive="xl"
      >
        <tbody>{matchesToMatchEntry}</tbody>
      </Table>
    </Container>
  );
}
