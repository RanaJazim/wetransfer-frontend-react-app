import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout, CreateEventForm, NavbarButtons } from "../../components/admin";

const CreateEvent = () => {
  const [event, setEvent] = useState();
  const history = useHistory();
  const location = useLocation();
  const eventId = location.state ? location.state.eventId : null;
  const eventApi = useApi(
    eventId ? eventService.updateEvent : eventService.createEvent,
    { isThrowErr: true }
  );
  const singleEventApi = useApi(eventService.fetchSingleEvent);

  useEffect(() => {
    if (eventId) {
      singleEventApi.request(eventId).then((res) => setEvent(res.data));
    }
  }, []);

  const handleSubmit = async (formValues) => {
    console.log("created event ", formValues);

    try {
      await eventApi.request(formValues);
      history.push("/admin-events");
    } catch (ex) {}
  };

  return (
    <AdminLayout>
      {singleEventApi.isLoading && <div className="spinner-border"></div>}
      {!singleEventApi.isLoading && (
        <div className="">
          <NavbarButtons />

          <div>
            <CreateEventForm
              onSubmit={handleSubmit}
              formValues={event}
              error={eventApi.error}
            />
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default CreateEvent;
