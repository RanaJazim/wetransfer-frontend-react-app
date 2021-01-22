import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { DashboardScreen } from "../screens/admin";

const AppRoutes = () => {
  const adminRoutePrefix = "admin";

  return (
    <Switch>
      <Route path={`/${adminRoutePrefix}-dashboard`}>
        <DashboardScreen />
      </Route>
      <Redirect exact to={`/${adminRoutePrefix}-dashboard`} from="/" />
    </Switch>
  );
};

export default AppRoutes;
