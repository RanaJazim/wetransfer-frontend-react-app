import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
                <a
                  className="nav-link ps-5"
                  aria-current="page"
                  href="Inscriptions.html"
                  style={{ color: "white" }}
                >
                  <h2>Inscriptions</h2>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ps-5"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <h2>Contacts</h2>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link ps-5 mt-2"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-lock" aria-hidden="true" style={{ fontSize: 20}} />
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
  return (
    <NavLink
      className="nav-link ps-5"
      style={{ color: "white" }}
      activeClassName="active"
      to={route}
    >
      <h2>{title}</h2>
    </NavLink>
  );
}
