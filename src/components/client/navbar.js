import React from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";

import * as userStorage from "../../utils/user_storage";

const Navbar = () => {
  const isUserLoggedIn = () => {
    const isLoggedIn = userStorage.isUserExist();
    console.log(isLoggedIn);

    return isUserLoggedIn ? "/admin-dashboard" : "/login";
    return isLoggedIn;
  };

  return (
    <header style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/Logo.png" width="200px" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-4 mb-lg-0">
              <li className="nav-item">
                <AppNavLink title="About us" route="/about-us" />
              </li>
              <li className="nav-item">
                <AppNavLink title="Events" route="/events" />
              </li>
              <li className="nav-item">
                <AppNavLink title="Inscriptions" route="/inscription" />
              </li>
              <li className="nav-item">
                <AppNavLink title="Contacts" route="/contact-us" />
              </li>

              <li className="nav-item">
                <Link
                  to={isUserLoggedIn()}
                  className="nav-link ps-5"
                  style={{ color: "white" }}
                >
                  <i
                    className="fa fa-lock"
                    aria-hidden="true"
                    style={{ fontSize: 20 }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

function AppNavLink({ title, route }) {
  const location = useLocation();
  const isActive = !!matchPath(location.pathname, route);

  const getActiveStyle = () => {
    if (isActive) {
      return { borderBottom: "1px solid white", paddingBottom: "10px", fontSize: "18px" };
    }
    return {};
  };

  return (
    <NavLink
      className="nav-link text-center "
      style={{ color: "white" }}
      to={route}
      exact
    >
      <span className="mx-5" style={getActiveStyle()}>
        {title}
      </span>
    </NavLink>
  );
}
