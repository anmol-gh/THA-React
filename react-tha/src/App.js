import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day16 from "./THAs/Day 16/chessboard";
import Day17 from "./THAs/Day 17/day17";
import Day18 from "./THAs/Day 18/day18";
import Day19 from "./THAs/Day 19/day19";
import Home from "./THAs/Home/home";
import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/day16">
          <Day16 />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/day17">
          <Day17 />
        </Route>
        <Route exact path="/day18">
          <Day18 />
        </Route>
        <Route exact path="/day19">
          <Day19 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
