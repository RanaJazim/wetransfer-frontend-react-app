import React from "react";

const LoginScreen = () => {
  return (
    <div>
      <img className="logo" src="/assets/images/Logo1.png" width={477} />
      <div className="loginBox">
        <img className="user" src="/assets/images/profile-user.png" />
        <p>Log in Administrator</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;

function LoginForm() {
  return (
    <form action="dashboard.html">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Username" />
        <div className="input-group-append">
          <i
            className="fa fa-user p-2"
            style={{ backgroundColor: "rgb(214 214 214)" }}
          ></i>
        </div>
      </div>
      <div className="input-group my-4">
        <input
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

      <button>Log in</button>
    </form>
  );
}
