import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// redux
import { fetchMatchesAndPredictions } from "../store/matches/actions";
import { selectUser } from "../store/user/selectors";
import { selectToken } from "../store/user/selectors";
// import { selectMatches } from "../store/matches/selectors";
// import { appLoading } from "../store/appState/actions";
// components
import TableMatches from "../components/matches/TableMatches";
// import MatchEntry from "../components/matches/MatchEntry";
// styles
import { Container } from "react-bootstrap";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  // const matches = useSelector(selectMatches);
  const token = useSelector(selectToken);
  const history = useHistory();
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchMatchesAndPredictions(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <div style={{ display: "flex" }}>
      <nav id="navbar-games" className="navbar navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">
          Voorspellingen
        </a> */}
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#1">
            Spel 1
          </a>
          <a class="nav-link" href="#2">
            Spel 2
          </a>
          <a class="nav-link" href="#3">
            Spel 3
          </a>
          <a class="nav-link" href="#4">
            Spel 4
          </a>
          <a class="nav-link" href="#5">
            Spel 5
          </a>
          <a class="nav-link" href="#6">
            Spel 6
          </a>
          <a class="nav-link" href="#7">
            Spel 7
          </a>
          <a class="nav-link" href="#8">
            Spel 8
          </a>
          <a class="nav-link" href="#9">
            Spel 9
          </a>
          <a class="nav-link" href="#10">
            Spel 10
          </a>
          <a class="nav-link" href="#11">
            Spel 11
          </a>
        </nav>
      </nav>

      <Container
        className="voorspellingen"
        md={{ span: 10, offset: 0.5 }}
        data-spy="scroll"
        data-target="#navbar-games"
        data-offset="0"
      >
        <TableMatches />
      </Container>
    </div>
  );
}
