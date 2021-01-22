import React from "react";

import { AdminLayout } from "../../components/admin";

const AboutUsScreen = () => {
  return (
    <AdminLayout>
      <div className="">
        <div className="right-corner">
          <span>
            <img className="user3" src="icons/user.png" width="40px" />
          </span>
          <span className="name">Admin Name</span>
          <span>
            <img src="icons/bell.png" width="25px" />
          </span>
          <span>
            <img src="icons/power.png" width="25px" />
          </span>
        </div>
        <div className="page-heading">
          <div className="patch" />
          <span className="page-name">About Us</span>
          <div>
            <br />
            <p>Title</p>
            <input type="text" className="inputs" placeholder="Titulo" />
            <p>Information about</p>
            <input
              className="input2 inputs"
              type="text"
              placeholder="Enter Information"
            />
            <br />
            <button>Save</button>
            <br />
            
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AboutUsScreen;
