import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AboutUsScreen, CreateEvent, DashboardScreen } from "../screens/admin";

const AppRoutes = () => {
  const adminRoutePrefix = "admin";

  return (
    <Switch>
      <Route path={`/${adminRoutePrefix}-dashboard`}>
        <DashboardScreen />
      </Route>
      <Route path={`/${adminRoutePrefix}-create-event`}>
        <CreateEvent />
      </Route>
      <Route path={`/${adminRoutePrefix}-about-us`}>
        <AboutUsScreen />
      </Route>
      <Redirect exact to={`/${adminRoutePrefix}-dashboard`} from="/" />
    </Switch>
  );
};

export default AppRoutes;
