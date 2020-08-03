import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";
import { appLoading } from "../../store/appState/actions";
import MatchEntry from "./MatchEntry";

export default function TableMatches() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);

  const compareMatches = (matchA, matchB) => {
    return matchA.eventTimeStamp - matchB.eventTimeStamp;
  };
  if (!matches) return dispatch(appLoading());
  const sortedMatches = [...matches].sort(compareMatches);

  const matchesToMatchEntry = sortedMatches.map((match, i) => {
    match.gameId = i % 27 === 0 ? i / 27 + 1 : "";
    const newColor = i % 27 === 0 ? "red" : "white";
    return (
      <MatchEntry
        key={match.id}
        color={newColor}
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
  );
}
