import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AboutUsScreen, CreateEvent, DashboardScreen } from "../screens/admin";
import { AboutUsClientScreen, EventScreen } from "../screens/client";

const AppRoutes = () => {
  const adminRoutePrefix = "admin";

  return (
    <Switch>
      <Route path="/about-us">
        <AboutUsClientScreen />
      </Route>
      <Route path="/events">
        <EventScreen />
      </Route>
      <Route path={`/${adminRoutePrefix}-dashboard`}>
        <DashboardScreen />
      </Route>
      <Route path={`/${adminRoutePrefix}-create-event`}>
        <CreateEvent />
      </Route>
      <Route path={`/${adminRoutePrefix}-about-us`}>
        <AboutUsScreen />
      </Route>
      {/* <Redirect exact to={`/${adminRoutePrefix}-dashboard`} from="/" /> */}
    </Switch>
  );
};

export default AppRoutes;

function ClientRoutes() {
  return (
    <>
      <Route path="/about-us">
        <AboutUsClientScreen />
      </Route>
    </>
  );
}

function AdminRoutes() {
  return <></>;
}
