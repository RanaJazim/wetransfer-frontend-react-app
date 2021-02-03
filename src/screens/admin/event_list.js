import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout, NavbarButtons } from "../../components/admin";

const EventListScreen = () => {
  const history = useHistory();
  const eventApi = useApi(eventService.fetchAllEvents);

  useEffect(() => {
    eventApi.request();
  }, []);

  return (
    <AdminLayout>
      {eventApi.isLoading && <div className="spinner-border"></div>}
      {!eventApi.isLoading && eventApi.res && (
        <>
          <NavbarButtons />

          <div className="p-5">
            <table className="table table-bordered my-5">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price To Apply</th>
                  <th>Event Date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {eventApi.res.data.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.priceToApply}</td>
                    <td>{event.eventDate}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/admin-create-event",
                          state: { eventId: event.id },
                        }}
                      >
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default EventListScreen;
