import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// redux
import { selectToken } from "../../store/user/selectors";
// Components
import Signup from "./AdminTasks/Signup";

export default function Admin() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  // For now just one admintask => signup new user
  return <Signup />;
}
