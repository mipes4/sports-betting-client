import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// redux
import { fetchRounds } from "../store/configs/actions";
import { selectToken } from "../store/user/selectors";
// components
import LeaderBoardRoundCard from "../components/overviews/LeaderBoardRoundCard";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  useEffect(() => {
    dispatch(fetchRounds());
  }, [dispatch]);

  return <div>{/* <LeaderBoardRoundCard /> */}</div>;
}
