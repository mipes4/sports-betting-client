import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
// assets
import logoDummy from "../../assets/logoDummy.png";
import { ReactComponent as Clock } from "../../assets/clock.svg";
// redux
import {
  postPrediction,
  changePrediction,
} from "../../store/predictions/actions";
import { selectScores } from "../../store/configs/selectors";
import { selectUser } from "../../store/user/selectors";
// styles
import { Button, Col, Form } from "react-bootstrap";

export default function MatchEntry({ match }) {
  const dispatch = useDispatch();
  const [goalsHomeTeam, setGoalsHomeTeam] = useState();
  const [goalsAwayTeam, setGoalsAwayTeam] = useState();
  const scores = useSelector(selectScores);
  const user = useSelector(selectUser);

  const savePrediction = (event) => {
    event.preventDefault();
    console.log("save");
    // if (getMatchedCSSRules.predictions.length === 0) {
    //   dispatch(
    //     postPrediction(
    //       goalsHomeTeam,
    //       goalsAwayTeam,
    //       user.id,
    //       1,
    //       match.fixtureId
    //     )
    //   );
    // } else {
    //   dispatch(changePrediction(goalsHomeTeam, goalsAwayTeam, user.id));
    // }
  };

  const predGoalsHomeTeam = match.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = match.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  // if (!scores[0])
  //   return (
  //     <tr>
  //       <td>Loading...</td>
  //     </tr>
  //   );

  return (
    <tr id={match.gameId} style={{ fontWeight: "bold" }}>
      <td style={{ verticalAlign: "middle" }}>
        <Link
          style={{ fontWeight: "bold" }}
          to={{
            pathname: `/wedstrijd/${match.fixtureId}`,
            aboutmatch: {
              eventTimeStamp: match.eventTimeStamp,
              round: match.round.match(/\d+/)[0],
              homeTeamGoals: match.goalsHomeTeam,
              awayTeamGoals: match.goalsAwayTeam,
            },
          }}
        >
          {`${moment.unix(match.eventTimeStamp).format("DD MMM YY - hh:mm")}`}
        </Link>
      </td>

      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={
            match.homeTeamLogo === "Not available in demo"
              ? logoDummy
              : match.homeTeamLogo
          }
          alt={`logo ${match.homeTeamName}`}
        />
      </td>

      <td style={{ textAlign: "right", verticalAlign: "middle" }}>
        {match.homeTeamName}
      </td>

      <td>
        <Form>
          <Form.Row>
            <Col>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Form.Control
                  size="sm"
                  style={{ width: "30px" }}
                  type="number"
                  min="0"
                  defaultValue={predGoalsHomeTeam[0]}
                  onChange={(event) => setGoalsHomeTeam(event.target.value)}
                  disabled={
                    Math.floor(Date.now() / 1000) > match.eventTimestamp - 300
                      ? true
                      : false
                  }
                />
                <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                <Form.Control
                  size="sm"
                  style={{ width: "30px" }}
                  type="number"
                  min="0"
                  defaultValue={predGoalsAwayTeam[0]}
                  onChange={(event) => setGoalsAwayTeam(event.target.value)}
                  disabled={
                    Math.floor(Date.now() / 1000) > match.eventTimestamp - 300
                      ? true
                      : false
                  }
                />
              </div>
            </Col>
          </Form.Row>
        </Form>
      </td>

      <td style={{ verticalAlign: "middle" }}>{match.awayTeamName}</td>

      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={
            match.awayTeamLogo === "Not available in demo"
              ? logoDummy
              : match.awayTeamLogo
          }
          alt="logo of team"
        />
      </td>

      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Button
          type="submit"
          onClick={savePrediction}
          className="btn-sm"
          variant="light"
        >
          Save
        </Button>
      </td>

      <td style={{ verticalAlign: "middle" }}>
        <Clock className="mr-2 ml-5" />
        {Math.floor(Date.now() / 1000) > match.eventTimeStamp - 300
          ? "Voorspellingen gesloten"
          : moment.unix(match.eventTimeStamp).startOf("minute").fromNow()}
      </td>

      {match.status === "CANC" ? (
        <td style={{ verticalAlign: "middle" }}>Geannuleerd</td>
      ) : (
        <td
          style={{ fontSize: 14, verticalAlign: "middle", fontWeight: "bold" }}
        >
          {match.goalsHomeTeam === null ||
          match.status === "CANC" ||
          predGoalsAwayTeam[0] === undefined
            ? ""
            : `Score: ${match.predictions.totalScore}`}
        </td>
      )}
      <td style={{ verticalAlign: "middle" }}>
        {match.goalsHomeTeam === null
          ? ""
          : `Uitslag: ${match.goalsHomeTeam} - ${match.goalsAwayTeam} `}
      </td>
    </tr>
  );
}
