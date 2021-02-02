import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Field } from "formik";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { ClientLayout } from "../../components/client";
import { AppForm, AppField, AppError } from "../../components/app-form";
import { registerEventSchema } from "../../utils/schema_validation";
import { ServerError } from "../../components";

const EventRegisterStepOneScreen = () => {
  const { state } = useLocation();
  const history = useHistory();
  const regEvent = useApi(eventService.registerToEvent, { isThrowErr: true });

  const isSubmitted = () => {
    console.log(state.event);
    if (new Date(state.event.applyDate) > new Date()) {
      return true;
    }
    return false;
  };

  const handleSubmit = ({ formValues }) => {
    let selectedEvent = "";
    for (const event of formValues.selectedEvent) {
      selectedEvent = selectedEvent + event + ",";
    }
    const formFields = {
      ...formValues,
      selectedEvent,
      eventId: state.event.id,
    };

    console.log("registered event", formFields);

    regEvent.request(formFields).then((res) => {
      history.replace({
        pathname: "/event-register-step-two",
        state: { summary: res.data },
      });
    });
  };

  return (
    <ClientLayout isFooter={false}>
      <main className="m-4 ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <h4>Rota de Lamperia-BTT</h4>
          <p>Full de Form</p>
        </div>

        <div className="my-3">
          <ServerError error={regEvent.error} />
        </div>
        <RegisterForm onSubmit={handleSubmit} />
      </main>
    </ClientLayout>
  );
};

export default EventRegisterStepOneScreen;

function RegisterForm({ onSubmit, formValues, isSubmit }) {
  return (
    <AppForm
      initialValues={formValues ?? initialValues}
      validationSchema={registerEventSchema}
      handleSubmit={onSubmit}
    >
      <div className="row g-3" action="EventSignUp3.html">
        <div className="col-md-5">
          <label htmlFor="inputName" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </label>
          <AppField
            field="name"
            className="form-control"
            id="inputName"
            placeholder="Name"
          />
          <AppError field="name" />
        </div>
        <div className="col-md-5 ms-5">
          <label htmlFor="inputEmail4" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
            </svg>
          </label>
          <AppField
            field="email"
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
          <AppError field="email" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputBirthday" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-calendar-event"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </label>
          <AppField
            field="dateOfBirth"
            type="date"
            className="form-control"
            id="inputBirthday"
            placeholder="Birth date"
          />
          <AppError field="dateOfBirth" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputGender" className="form-label">
            <i
              className="fa fa-venus-mars"
              aria-hidden="true"
              style={{ width: "36px" }}
            />
          </label>
          <Field name="gender" as="select" className="form-select">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <AppError field="gender" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPhone" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-telephone-plus"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              <path
                fillRule="evenodd"
                d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </label>
          <AppField
            field="phone"
            type="number"
            className="form-control"
            id="inputPhone"
            placeholder="Phone"
          />
          <AppError field="phone" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputAddress" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </label>
          <AppField
            field="address"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
          />
          <AppError field="address" />
        </div>
        <div className="col-md-1">
          <br />
          <AppField
            field="door"
            className="form-control mt-2"
            id="inputdoor"
            placeholder="door"
          />
          <AppError field="door" />
        </div>
        <div className="col-md-1">
          <br />
          <AppField
            field="floor"
            className="form-control mt-2"
            id="inputfloor"
            placeholder="floor"
          />
          <AppError field="floor" />
        </div>
        <div className="col-md-2">
          <br />
          <AppField
            field="zipCode"
            className="form-control mt-2"
            id="inputZipcode"
            placeholder="Zip code"
          />
          <AppError field="zipCode" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputNIF" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>
          </label>
          <AppField
            field="nif"
            className="form-control"
            id="inputNIF"
            placeholder="NIF"
          />
          <AppError field="nif" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputTeam" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </label>
          <AppField
            field="teamName"
            className="form-control"
            id="inputTeam"
            placeholder="Team name"
          />
          <AppError field="teamName" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputCategory" className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-card-list"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
          </label>
          <Field name="category" as="select" className="form-select">
            <option value="">Category</option>
            <option value="master 20">Master 20</option>
            <option value="master 30">Master 30</option>
            <option value="master 40">Master 40</option>
          </Field>
          <AppError field="category" />
        </div>
        <div className="row mt-5">
          <div className="col-xl-2">
            <div className="form-check-inline">
              <label className="form-check-label">
                <Field
                  type="checkbox"
                  name="selectedEvent"
                  className="form-check-input"
                  value="Federated"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-bicycle"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                </svg>{" "}
                Federated
              </label>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="form-check-inline">
              <label className="form-check-label">
                <Field
                  type="checkbox"
                  name="selectedEvent"
                  className="form-check-input"
                  value="Meal"
                />
                <i
                  className="fa fa-cutlery"
                  style={{ width: "26px", height: "26px" }}
                />
                Meal
              </label>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="form-check-inline">
              <label className="form-check-label">
                <Field
                  type="checkbox"
                  name="selectedEvent"
                  className="form-check-input"
                  value="Companion"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                Companion
              </label>
            </div>
          </div>
        </div>

        <div className="col-xl-3">
          <label className="form-label">Tm algyma algeria? Informato</label>
          <AppField field="issue" className="form-control p-5" />
          <AppError field="issue" />
        </div>
        <div className="col-md-4 mt-5">
          <Field name="companions" as="select" className="form-select">
            <option value="">Number of Companions</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <AppError field="companions" />
        </div>
        <div className="float-end">
          <div className="col-auto">
            <button type="submit" className="btn btn-success float-end">
              Continue
            </button>
            {/* {isSubmit && (
            )}
            {!isSubmit && (
              <p>Sorry You cannot register because apply date is expired</p>
            )} */}
          </div>
        </div>
      </div>
    </AppForm>
  );
}

const initialValues = {
  name: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  phone: "",
  address: "",
  door: "",
  floor: "",
  zipCode: "",
  nif: "",
  teamName: "",
  category: "",
  selectedEvent: [],
  companions: "",
  issue: "",
};
