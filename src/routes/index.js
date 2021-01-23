import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AboutUsScreen, CreateEvent, DashboardScreen } from "../screens/admin";
import {
  AboutUsClientScreen,
  EventRegisterStepOneScreen,
  EventScreen,
  EventRegisterStepTwoScreen,
  EventRegisterStepThreeScreen,
} from "../screens/client";

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
      <Route path="/event-register-step-one">
        <EventRegisterStepOneScreen />
      </Route>
      <Route path="/event-register-step-two">
        <EventRegisterStepTwoScreen />
      </Route>
      <Route path="/event-register-step-three">
        <EventRegisterStepThreeScreen />
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
