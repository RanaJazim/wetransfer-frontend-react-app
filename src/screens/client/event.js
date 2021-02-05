import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { ClientLayout } from "../../components/client";
import { SERVER_BASE_URL } from "../../utils";
import { useApi } from "../../hooks";
import * as eventService from "../../services/event";

const EventScreen = () => {
  return (
    <ClientLayout>
      <main className="p-3">
        <h1>Events</h1>
        <div className="row">
          <p>
            Cras tristique tincidunt enim. Morbi mattis sem at sapien lobortis
            suscipit. Sed enim risus, imperdiet vel nibh eget, lobortis ultrices
            elit. Sed sit amet eros pulvinar leo euismod egestas at quis erat.
            Quisque vulputate nulla sodales, tempus neque a, mattis justo. Nunc
            eget sem in massa porta eleifend. In ligula turpis, congue at
            ullamcorper eget, ultrices in lorem. Maecenas blandit tincidunt est
            in cursus. Nam eu lobortis ex. Praesent scelerisque condimentum
            velit, nec pretium massa malesuada vel. Integer vel dictum ipsum, ac
            accumsan mauris.
          </p>
          <p>
            Sed non justo eu mauris laoreet gravida ac id nisl. Donec eleifend
            molestie purus quis posuere. Donec vestibulum sit amet turpis ac
            ultricies. Maecenas dignissim, felis quis fringilla vehicula, mi
            orci facilisis leo, quis consectetur magna arcu nec tellus.{" "}
          </p>
        </div>

        <_FutureEvents />

        <div className="my-4">
          <_PastEvents />
        </div>
      </main>
    </ClientLayout>
  );
};

export default EventScreen;

function _FutureEvents() {
  const futureEvent = useApi(eventService.futureEvents);

  useEffect(() => {
    futureEvent.request();
  }, []);

  return (
    <>
      <div className="row">
        <h2>Eventos Futuros</h2>
      </div>
      {futureEvent.isLoading && <div className="spinner-border"></div>}
      {!futureEvent.isLoading &&
        futureEvent.res &&
        futureEvent.res.data.map((event, index) => {
          if (index % 2 === 0) return <LeftEvent event={event} />;
          return <RightEvent event={event} />;
        })}
      {!futureEvent.isLoading &&
        futureEvent.res &&
        futureEvent.res.data.length === 0 && <p>No Future Event found ..</p>}
    </>
  );
}

function _PastEvents() {
  const pastEvent = useApi(eventService.pastEvents);

  useEffect(() => {
    pastEvent.request();
  }, []);

  return (
    <>
      <div className="row">
        <h2>Eventos Anterios</h2>
      </div>
      {pastEvent.isLoading && <div className="spinner-border"></div>}
      {!pastEvent.isLoading &&
        pastEvent.res &&
        pastEvent.res.data.map((event, index) => {
          if (index % 2 === 0) return <LeftEvent event={event} isPastEvent />;
          return <RightEvent event={event} isPastEvent />;
        })}
      {!pastEvent.isLoading &&
        pastEvent.res &&
        pastEvent.res.data.length === 0 && <p>No Past Event found ..</p>}
    </>
  );
}

function LeftEvent({ event, isPastEvent = false }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around align-items-stretch">
        <h2 style={{ color: "#2c8850" }}>{event.title}</h2>
        <div className="col-xl-2">
          <div className="back">
            <img
              src={`${SERVER_BASE_URL}/${event.imagePath}`}
              width="250px"
              height="350px"
            />
            <div className="float-center ms-0">
              {!isPastEvent && (
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
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-8 d-flex flex-column justify-content-between">
          <div className="row float-end">
            <div className="col">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </span>
              <span> {event.applyDate}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <span> {event.eventDate}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span>{event.location}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-signpost-2"
                viewBox="0 0 16 16"
              >
                <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z" />
              </svg>
              <span>{event.shortenRoutes}</span>
            </div>
            <br />
            <br />
            <div className="row float-end">
              {/* Upper right row */}
              <div className="col">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function _RightEvent({ event, isPastEvent = false }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around align-items-stretch">
        <h2 style={{ color: "#2c8850" }}>{event.title}</h2>
        <div className="col-xl-8 ms-0 d-flex flex-column justify-content-between">
          <div className="row float-end">
            <div className="col">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </span>
              <span> {event.applyDate}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <span> {event.eventDate}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span>{event.location}</span>
            </div>
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-signpost-2"
                viewBox="0 0 16 16"
              >
                <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z" />
              </svg>
              <span>{event.shortenRoutes}</span>
            </div>
            <br />
            <br />
            <div className="row float-end">
              {/* Upper right row */}
              <div className="col">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="back">
            <img
              src={`${SERVER_BASE_URL}/${event.imagePath}`}
              width="250px"
              height="350px"
            />
            <div className="float-center ms-0">
              {!isPastEvent && (
                <Link
                  to={{
                    pathname: "/event-register-step-one",
                    state: { event },
                  }}
                >
                  <button className="btn btn-success m-2" type="button">
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightEvent({ event, isPastEvent = false }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around align-items-stretch">
        <br />
        <br />
        <h2 style={{ color: "#2c8850" }}>{event.title}</h2>
        <div className="col-xl-8 ms-0 d-flex flex-column justify-content-between">
          <div className="row float-end">
            {/* Upper right row */}
            <div className="col">
              <p>{event.description}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="back">
            <img
              src={`${SERVER_BASE_URL}/${event.imagePath}`}
              width="250px"
              height="350px"
            />
            {!isPastEvent && (
              <Link
                to={{ pathname: "/event-register-step-one", state: { event } }}
              >
                <button className="btn btn-success btn-sm m-2 mx-auto d-block" type="button">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
