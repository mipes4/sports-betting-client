import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
// Components
import Sidebar from "../sidebar/Sidebar";

export default function Admin() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <div>
      <Sidebar />

      <Link to="/signup" style={{ textAlign: "center" }}>
        Click here to sign up a new user
      </Link>

      <p style={{ color: "#fff" }}>some other admin tasks</p>
    </div>
  );
}
