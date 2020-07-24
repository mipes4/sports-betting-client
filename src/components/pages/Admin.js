import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory, Link } from "react-router-dom";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function Admin() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <div>
      <h1>Admin page</h1>
      <Link to="/signup" style={{ textAlign: "center" }}>
        Click here to sign up a new user
      </Link>
    </div>
  );
}
