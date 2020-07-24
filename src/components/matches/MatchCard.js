import React, { useState } from "react";
import moment from "moment";
import logoDummy from "../images/logoDummy.png";
import { ReactComponent as Clock } from "../images/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  postPrediction,
  changePrediction,
} from "../../store/predictions/actions";
import { Button, Col, Form } from "react-bootstrap";
import { selectScores } from "../../store/configs/selectors";
import { calculateScore } from "../../config/helperScores";
import { useParams } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";

export default function MatchCard(props) {
  const dispatch = useDispatch();
  const [goalsHomeTeam, setGoalsHomeTeam] = useState();
  const [goalsAwayTeam, setGoalsAwayTeam] = useState();
  const scores = useSelector(selectScores);
  // const params = useParams();
  const user = useSelector(selectUser);

  // console.log("What are my params?", params.userId);

  // const id = props.predictions.map((prediction) => {
  //   return prediction.id;
  // });

  // console.log("What is timestamp?", props.eventTimestamp);

  const savePrediction = (event) => {
    event.preventDefault();
    // dispatch(appLoading());
    if (props.predictions.length === 0) {
      dispatch(
        postPrediction(
          goalsHomeTeam,
          goalsAwayTeam,
          user.id,
          1,
          props.fixtureId
        )
      );
    } else {
      dispatch(changePrediction(goalsHomeTeam, goalsAwayTeam, user.id));
    }
  };

  const predGoalsHomeTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  if (!scores[0])
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );

  const totalScore = calculateScore(
    { homeTeam: props.goalsHomeTeam, awayTeam: props.goalsAwayTeam },
    { homeTeam: predGoalsHomeTeam[0], awayTeam: predGoalsAwayTeam[0] },
    scores[0]
  );

  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{`${props.round} | ${moment
        .unix(props.eventTimestamp)
        .format("DD MMMM YYYY, h:mm uur")}`}</td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={
            props.homeTeamLogo === "Not available in demo"
              ? logoDummy
              : props.homeTeamLogo
          }
          alt={`logo ${props.homeTeamName}`}
        />
      </td>
      <td style={{ textAlign: "right", verticalAlign: "middle" }}>
        {props.homeTeamName}
      </td>
      <td>
        {" "}
        <Form>
          <Form.Row>
            <Col>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Form.Control
                  size="sm"
                  style={{ width: "60px" }}
                  type="number"
                  min="0"
                  defaultValue={predGoalsHomeTeam[0]}
                  onChange={(event) => setGoalsHomeTeam(event.target.value)}
                  disabled={
                    Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
                      ? true
                      : false
                  }
                />
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <Form.Control
                  size="sm"
                  style={{ width: "60px" }}
                  type="number"
                  min="0"
                  defaultValue={predGoalsAwayTeam[0]}
                  onChange={(event) => setGoalsAwayTeam(event.target.value)}
                  disabled={
                    Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
                      ? true
                      : false
                  }
                />
              </div>
            </Col>
          </Form.Row>
        </Form>
      </td>
      <td style={{ verticalAlign: "middle" }}>{props.awayTeamName}</td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={
            props.awayTeamLogo === "Not available in demo"
              ? logoDummy
              : props.awayTeamLogo
          }
        />
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Button type="submit" onClick={savePrediction}>
          Save
        </Button>
      </td>
      <td style={{ verticalAlign: "middle" }}>
        <Clock /> &nbsp;&nbsp;
        {Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
          ? "Voorspellingen gesloten"
          : moment.unix(props.eventTimestamp).startOf("minute").fromNow()}
      </td>

      {props.status === "CANC" ? (
        <td style={{ verticalAlign: "middle" }}>Geannuleerd</td>
      ) : (
        <td
          style={{ fontSize: 14, verticalAlign: "middle", fontWeight: "bold" }}
        >
          {props.goalsHomeTeam === null ||
          props.status === "CANC" ||
          predGoalsAwayTeam[0] === undefined
            ? ""
            : `Score: ${totalScore}`}
        </td>
      )}
      <td style={{ verticalAlign: "middle" }}>
        {props.goalsHomeTeam === null
          ? ""
          : `Uitslag: ${props.goalsHomeTeam} - ${props.goalsAwayTeam} `}
      </td>
    </tr>
  );
}
