import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useApi } from "../../hooks";
import { loginSchema } from "../../utils";
import { ServerError } from "../../components";
import * as authService from "../../services/auth";
import * as userStorage from "../../utils/user_storage";
import { AppForm, AppField, AppError } from "../../components/app-form";

const LoginScreen = () => {
  const history = useHistory();
  const authApi = useApi(authService.login, { isThrowErr: true });

  const handleSubmit = async ({ formValues }) => {
    try {
      const res = await authApi.request(formValues);
      userStorage.setUser(res.data);
      history.replace("/admin-dashboard");
    } catch (_) {}
  };

  return (
    <div>
      <img className="logo" src="/assets/images/Logo1.png" width={477} />
      <div className="loginBox">
        <img className="user" src="/assets/images/profile-user.png" />
        <p>Log in Administrator</p>
        <LoginForm onSubmit={handleSubmit} />
        <Link to="/">
          <i className="fa fa-backward" aria-hidden="true"></i> Back to Site
        </Link>
        <div className="my-2 mb-3">
          <ServerError error={authApi.error} />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

function LoginForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      handleSubmit={onSubmit}
    >
      <div className="input-group">
        <AppField
          field="email"
          className="form-control"
          placeholder="Username"
        />

        <div className="input-group-append">
          <i
            className="fa fa-user p-2"
            style={{ backgroundColor: "rgb(214 214 214)" }}
          ></i>
        </div>
      </div>
      <AppError field="email" />

      <div className="input-group my-4">
        <AppField
          field="password"
          type="password"
          className="form-control"
          placeholder="Password"
        />
        <div className="input-group-append">
          <i
            className="fa fa-key p-2"
            style={{ backgroundColor: "rgb(214 214 214)" }}
          ></i>
        </div>
      </div>

      <AppError field="password" />

      <button type="submit">Log in</button>
    </AppForm>
  );
}

const initialValues = {
  email: "",
  password: "",
};
