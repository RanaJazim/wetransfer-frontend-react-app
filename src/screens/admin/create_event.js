import React from "react";
import { useLocation } from "react-router-dom";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout, CreateEventForm } from "../../components/admin";

const CreateEvent = () => {
  const location = useLocation();
  const eventApi = useApi(eventService.createEvent);

  const handleSubmit = async (formValues) => {
    console.log("created event ", formValues);
    eventApi.request(formValues);
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

        <div>
          <CreateEventForm
            onSubmit={handleSubmit}
            formValues={location.state.event}
            error={eventApi.error}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateEvent;
