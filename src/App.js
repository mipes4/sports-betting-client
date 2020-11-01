import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
// pages
import Admin from "./pages/Admin/Admin";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MatchBoard from "./pages/MatchBoard";
import Profiel from "./pages/Profiel/Profiel";
import Regels from "./pages/Regels";
import TotoBoard from "./pages/TotoBoard";
import Voorspellingen from "./pages/Voorspellingen/Voorspellingen";
// import Testpage from "./pages/Testpage/Testpage";
// components
import NavigationComponent from "./components/navigation/NavigationComponent";
import MessageBox from "./components/messageBox/MessageBox";
import Loading from "./components/loading/Loading";
// styles
import "./App.css";
// import "./bootstrap.min.css";

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
        {/* <Route path="/test" component={Testpage} /> */}
      </Switch>
    </div>
  );
}

export default App;
