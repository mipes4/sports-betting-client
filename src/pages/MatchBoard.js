import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
// redux
import { fetchMatchPredictions } from "../store/predictions/actions";
import { selectPredictions } from "../store/predictions/selectors";
// styles
import { Table, Container } from "react-bootstrap";

export default function MatchBoard(props) {
  const dispatch = useDispatch();
  //  const { eventTimestamp } = props.location.aboutProps;
  const { matchId } = useParams();
  const { matchPrediction } = useSelector(selectPredictions);
  console.log("matchPrediction:", matchPrediction);
  useEffect(() => {
    dispatch(fetchMatchPredictions(matchId));
  }, [dispatch, matchId]);
  // console.log("props:", eventTimestamp);
  return (
    <div>
      {Math.floor(Date.now() / 1000) >
      props.location.aboutProps.eventTimestamp - 300 ? (
        <Container>
          {props.location.aboutProps.homeTeamGoals !== null ||
          props.location.aboutProps.awayTeamGoals !== null ? (
            <h1 className="mt-5">{`HomeTeamGoals: ${props.location.aboutProps.homeTeamGoals} AwayTeamGoals: ${props.location.aboutProps.awayTeamGoals}`}</h1>
          ) : (
            <h1>Predictions for the Match</h1>
          )}

          <h4 className="mb-5">{`${
            props.location.aboutProps.round
          } | ${moment
            .unix(props.location.aboutProps.eventTimestamp)
            .format("DD MMMM YYYY, h:mm uur")} `}</h4>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                <th>Player</th>
                <th>Away Team Goals Prediction</th>
                <th>Home Team Goals Prediction</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {matchPrediction.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.user.username}</td>
                    <td>{score.predGoalsAwayTeam}</td>
                    <td>{score.predGoalsHomeTeam}</td>
                    <td>{score.totalScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      ) : (
        <h1>Predictions will be displayed 5 mins before Match start time</h1>
      )}
    </div>
  );
}
