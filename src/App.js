import Welcome from "./pages/welcome/Welcome";
import "./app.scss";
import Home from "./pages/home/Home";
import Planning from "./pages/planning/Planning";
import Congratulation from "./pages/congratulation/Congratulation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/planning">
            <Planning />
          </Route>
          <Route path="/congratulation">
            <Congratulation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
