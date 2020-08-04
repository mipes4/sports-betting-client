import React, { useState, useEffect } from "react";
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
  const [showTask, setShowTask] = useState("signup");
  const tasks = ["signup", "update data", "change toto status", "other"];

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  const selectTask = (task) => {
    console.log(task);
    setShowTask(task);
  };

  const renderEditor = () => {
    return showTask === "signup" ? (
      <Signup />
    ) : showTask === "update data" ? (
      <h1>Click to update data</h1>
    ) : showTask === "change toto status" ? (
      <h1>Change Toto Status</h1>
    ) : (
      <h1>Other</h1>
    );
  };

  return (
    <div className="admin__container">
      <Sidebar onSelect={selectTask} tasks={tasks} />
      <div className="admin__container--editor">{renderEditor()}</div>
    </div>
  );
}
