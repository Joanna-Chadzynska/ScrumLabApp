import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../Welcome";
import Pulpit from "../Pulpit";
import Przepisy from "../Przepisy";
import Plany from "../Plany";
import Zakupy from "../Zakupy";
// import NotFound from "../NotFound";
import AppWrapper from "./AppWrapper";

const MainPage = () => {
  return (
    <main>
      <Switch>
        <AppWrapper>
          <Route exact path='/app' component={Welcome} />
          <Route path='/app/pulpit' component={Pulpit} />
          <Route path='/app/przepisy' component={Przepisy} />
          <Route path='/app/plan' component={Plany} />
          <Route path='/app/zakupy' component={Zakupy} />
          {/* <Route component={NotFound} /> */}
        </AppWrapper>
      </Switch>
    </main>
  );
};

export default MainPage;
