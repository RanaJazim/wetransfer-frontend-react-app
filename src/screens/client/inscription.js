import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { ClientLayout } from "../../components/client";
import { SERVER_BASE_URL } from "../../utils";

const InscriptionScreen = () => {
  const eventApi = useApi(eventService.futureEvents);

  useEffect(() => {
    eventApi.request();
  }, []);

  return (
    <ClientLayout>
      <main className="ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <p>
            Cras tristique tincidunt enim. Quisque vulputate nulla sodales,
            tempus neque a, mattis justo.
          </p>
        </div>
        <div className="row justify-content-md-center mb-3">
          {eventApi.isLoading && <div className="spinner-border"></div>}
          {!eventApi.isLoading &&
            eventApi.res &&
            eventApi.res.data.map((event) => (
              <SingleInscription key={event.id} event={event} />
            ))}

          {!eventApi.isLoading &&
            eventApi.res &&
            eventApi.res.data.length === 0 && (
              <p>Sorry there is no future events yet ..</p>
            )}
        </div>
      </main>
    </ClientLayout>
  );
};

export default InscriptionScreen;

function SingleInscription({ event }) {
  return (
    <div className="col-xl-4 my-3">
      <div className="back">
        <img
          src={`${SERVER_BASE_URL}/${event.imagePath}`}
          width="250px"
          height="350px"
        />
        <div className="float-center ms-0">
          <Link
            to={{
              pathname: "/event-register-step-one",
              state: { event },
            }}
          >
            <button className="btn btn-success btn-sm m-2 mx-auto d-block" type="button">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
