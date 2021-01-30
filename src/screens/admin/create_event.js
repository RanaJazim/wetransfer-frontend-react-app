import React from "react";

import { AdminLayout, CreateEventForm } from "../../components/admin";

const CreateEvent = () => {
  const handleSubmit = ({ formValues }) => {
    console.log("created event ", formValues);
  };

  return (
    <AdminLayout>
      <div className="">
        <div className="right-corner">
          <span>
            <img className="user3" src="icons/user.png" width="40px" />
          </span>
          <span className="name">Nome Admin</span>
          <span>
            <img src="icons/bell.png" width="25px" />
          </span>
          <span>
            <img src="icons/power.png" width="25px" />
          </span>
        </div>

        <CreateEventForm onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default CreateEvent;
