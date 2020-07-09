import React, { Component } from "react";
import "./App.css";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Pizza from "../Pizza";
import Carte from "../Carte";
import Dryck from "../Dryck";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={ROUTES.PIZZA} component={Pizza} />
          <Route path={ROUTES.CARTE} component={Carte} />
          <Route path={ROUTES.DRYCK} component={Dryck} />
          <Route path={ROUTES.HOME} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
