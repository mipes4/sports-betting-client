import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
// Components
import Sidebar from "../sidebar/Sidebar";
import Signup from "../signup/Signup";

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
      <div>
        <Sidebar />
      </div>

      <div></div>
      <Signup />
    </div>
  );
}
