import React, { useEffect } from "react";
import MatchCard from "../matches/MatchCard";
import { fetchMatchesAndPredictions } from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";
import { selectUser } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
import { fetchScores } from "../../store/configs/actions";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { appLoading } from "../../store/appState/actions";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);
  const token = useSelector(selectToken);
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchMatchesAndPredictions(user.id));
    dispatch(fetchScores());
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  if (!matches) return dispatch(appLoading());

  const compareMatches = (matchA, matchB) => {
    return matchB.eventTimeStamp - matchA.eventTimeStamp;
  };

  const sortedMatches = matches.sort(compareMatches);

  const matchesToMatchCard = sortedMatches.map((match) => {
    return (
      <MatchCard
        key={match.id}
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
        round={match.round}
        status={match.status}
        predictions={match.predictions}
      />
    );
  });

  return (
    <Container md={{ span: 11, offset: 0.5 }}>
      <h1>Voorspellingen</h1>

      <Table
        style={{ fontSize: 12, textAlign: "left", verticalAlign: "middle" }}
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        responsive="xl"
      >
        <tbody> {matchesToMatchCard}</tbody>
      </Table>
    </Container>
  );
}
