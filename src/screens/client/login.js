import React from "react";

import { loginSchema } from "../../utils";
import { AppForm, AppField, AppError } from "../../components/app-form";

const LoginScreen = () => {
  const handleSubmit = ({ formValues }) => {
    alert("success");
  };

  return (
    <div>
      <img className="logo" src="/assets/images/Logo1.png" width={477} />
      <div className="loginBox">
        <img className="user" src="/assets/images/profile-user.png" />
        <p>Log in Administrator</p>
        <LoginForm onSubmit={handleSubmit} />
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
        {/* <input type="text" className="form-control" placeholder="Username" /> */}
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
        {/* <input
          type="password"
          className="form-control"
          placeholder="Password"
        /> */}
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
