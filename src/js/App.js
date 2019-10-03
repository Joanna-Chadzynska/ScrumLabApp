import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./+LandingPage";
import Application from "./+Application";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/app' component={Application} />
      </Switch>
    </Router>
  );
};

export default App;
