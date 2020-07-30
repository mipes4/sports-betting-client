import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
// Components
import Sidebar from "../sidebar/Sidebar";
import Signup from "../signup/Signup";
// Styles
import "../../scss/Admin.scss";

export default function Admin() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <div className="admin__container">
      <div className="admin__container--sidebar">
        <Sidebar />
      </div>

      <div className="admin__container--editor">
        <Signup />
      </div>
    </div>
  );
}
