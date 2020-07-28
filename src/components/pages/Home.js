import React, { useEffect } from "react";
import LeaderBoardRoundCard from "../overviews/LeaderBoardRoundCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRounds } from "../../store/configs/actions";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

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

  return (
    <div>
      <LeaderBoardRoundCard />
    </div>
  );
}
