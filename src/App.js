import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
// components
import Home from "./components/pages/Home";
import Voorspellingen from "./components/pages/Voorspellingen";
import Regels from "./components/pages/Regels";
import Login from "./components/pages/Login";
import Profiel from "./components/pages/Profiel";
import Admin from "./components/pages/Admin";
import NavigationComponent from "./components/navigation/NavigationComponent";
import MessageBox from "./components/messageBox/MessageBox";
import Loading from "./components/loading/Loading";
// styles
// import "./bootstrap.min.css";
import "./App.css";
import TotoBoard from "./components/pages/TotoBoard";
import MatchBoard from "./components/pages/MatchBoard";
import GameBoard from "./components/pages/GameBoard";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavigationComponent />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/wedstrijd/:matchId" component={MatchBoard} />
        <Route path="/game/:gameId" component={GameBoard} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/voorspellingen" component={Voorspellingen} />
        <Route path="/regels" component={Regels} />
        <Route path="/profiel" component={Profiel} />
        <Route path="/admin" component={Admin} />
        <Route path="/totoboard" component={TotoBoard} />
      </Switch>
    </div>
  );
}

export default App;
