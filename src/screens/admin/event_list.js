import React, { useEffect } from "react";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout } from "../../components/admin";
import { Link } from "react-router-dom";

const EventListScreen = () => {
  const eventApi = useApi(eventService.fetchAllEvents);

  useEffect(() => {
    eventApi.request();
  }, []);

  return (
    <AdminLayout>
      {eventApi.isLoading && <div className="spinner-border"></div>}
      {!eventApi.isLoading && eventApi.res && (
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
                        state: { message: "event here .." },
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
      )}
    </AdminLayout>
  );
};

export default EventListScreen;
