import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  AboutUsScreen,
  CreateEvent,
  DashboardScreen,
  EventListScreen,
} from "../screens/admin";
import {
  AboutUsClientScreen,
  EventRegisterStepOneScreen,
  EventScreen,
  EventRegisterStepTwoScreen,
  EventRegisterStepThreeScreen,
  LoginScreen,
} from "../screens/client";
import { CreateOrUpdateAbout } from "../components/admin";

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
      <Route path="/login">
        <LoginScreen />
      </Route>

      <Route path={`/${adminRoutePrefix}-dashboard`}>
        <DashboardScreen />
      </Route>
      <Route path={`/${adminRoutePrefix}-create-event`}>
        <CreateEvent />
      </Route>
      <Route path={`/${adminRoutePrefix}-about-us`}>
        <CreateOrUpdateAbout />
      </Route>
      <Route path={`/${adminRoutePrefix}-events`}>
        <EventListScreen />
      </Route>
      <Redirect exact from="/" to="/about-us" />
    </Switch>
  );
};

export default AppRoutes;
