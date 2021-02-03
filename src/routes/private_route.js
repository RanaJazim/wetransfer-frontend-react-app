import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as userStorage from "../utils/user_storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userStorage.isUserExist()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
