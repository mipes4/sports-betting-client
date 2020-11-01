import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// redux
import { fetchMatchesAndPredictions } from "../../store/matches/actions";
import { selectMatches } from "../../store/matches/selectors";
import { appLoading } from "../../store/appState/actions";
// component
import MatchEntry from "./MatchEntry";
// styles
import { Table } from "react-bootstrap";

export default function TableMatches() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);

  useEffect(() => {
    dispatch(fetchMatchesAndPredictions());
  }, []);

  if (!matches) return dispatch(appLoading());

  const compareMatches = (matchA, matchB) =>
    matchA.eventTimeStamp - matchB.eventTimeStamp;

  const sortedMatches = [...matches].sort(compareMatches);

  const groupArr = (data, n) => {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  };

  const displayTablePerGroup = () =>
    groupArr(sortedMatches, 9).map((arr, i) => {
      return (
        <Table
          key={i}
          style={{ fontSize: 12, textAlign: "left", verticalAlign: "middle" }}
          striped
          hover
          variant="light"
          size="sm"
          responsive="xl"
        >
          <thead>{getTableHead(i * 9)}</thead>
          <tbody>
            {arr.map((match, j) => (
              <MatchEntry key={j} match={match} />
            ))}
          </tbody>
        </Table>
      );
    });

  const getTableHead = (i) => (
    <tr>
      <th>
        <span>
          Game -{" "}
          {i >= 27 * Math.floor(sortedMatches.length / 27)
            ? Math.floor(i / 27)
            : Math.floor(i / 27) + 1}
        </span>
        <span className="ml-5">
          Round -{" "}
          {i >= 27 * Math.floor(sortedMatches.length / 27)
            ? 4
            : i % 27 < 9
            ? 1
            : i % 27 < 18
            ? 2
            : 3}
        </span>
      </th>
    </tr>
  );

  return <>{displayTablePerGroup()}</>;
}
