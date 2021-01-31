import React from "react";
import { NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="sidebar">
        <img className="logo2" src="/assets/images/Logo.png" width="200px" />
        <br />
        <br />
        <img className="user1" src="/assets/images/user.png" width="50px" />
        <div className="admin">
          <b>Name Admin</b>
          <br />
          Administrator
        </div>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/admin-dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/admin-create-event">
              Create Event
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/admin-events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/admin-about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="main">{children}</div>
    </div>
  );
};

export default AdminLayout;
