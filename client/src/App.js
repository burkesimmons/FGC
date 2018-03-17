import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Captain from "./pages/Captain";
import NoMatch from "./pages/NoMatch";
import NavComplete from './components/NavComplete';
import Rates from './pages/Rates';
import Bring from './pages/Bring';

const App = () =>
  <Router>
    <div>
    <NavComplete />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/captain" component={Captain} />
        <Route exact path="/rates" component={Rates} />
        <Route exact path="/bring" component={Bring} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
