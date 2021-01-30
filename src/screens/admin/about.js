import React from "react";

import { AdminLayout, AboutForm } from "../../components/admin";

const AboutUsScreen = () => {
  const handleSubmit = ({ formValues }) => {
    console.log("create about details", formValues);
  };

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

        <AboutForm onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default AboutUsScreen;
