import React, { useState } from "react";

import { AppField, AppError, AppForm } from "../app-form";
import { createEventSchema, SERVER_BASE_URL } from "../../utils";
import { ServerError } from "..";

function CreateEventForm({ onSubmit, formValues, error }) {
  const [file, setFile] = useState("");

  const getImage = () => {
    return SERVER_BASE_URL + "/" + formValues.imagePath;
  };

  const handleSubmit = ({ formValues }) => {
    onSubmit({ ...formValues, image: file });
  };

  return (
    <AppForm
      initialValues={formValues ?? initialValues}
      validationSchema={createEventSchema}
      handleSubmit={handleSubmit}
    >
      <div className="page-heading">
        <div className="patch" />
        <span className="page-name">Events</span>

        <ClientValidationError />

        <label>
          {" "}
          Choose File
          <input
            type="file"
            name="image"
            size={60}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {/* <AppField field="image" type="file" size={60} /> */}
        </label>

        {formValues && (
          <div className="mt-3 mb-5">
            <img
              src={getImage()}
              width="100"
              height="100"
              className="card p-2"
            />
          </div>
        )}

        <div>
          <br />

          <div>Event Name </div>
          <AppField field="title" className="inputs" placeholder="Event Name" />

          <div>Description of Event</div>
          <AppField
            field="description"
            className="input2 inputs"
            placeholder="Enter Information"
          />
          <br />
        </div>
        <div className="leftline">
          <div>Apply Date and Time</div>
          <div className="form-inline">
            <AppField
              field="applyDate"
              type="date"
              placeholder="Event Apply Date"
            />
            <AppField field="applyTime" placeholder="Event Apply Time" />
          </div>
        </div>
        <div className="rightline">
          <div>Event Date and Time</div>
          <div className="form-inline">
            <AppField
              field="eventDate"
              type="date"
              placeholder="Event Date"
            />
            <AppField field="eventTime" placeholder="Event Time" />
          </div>
        </div>
        <div className="leftline">
          <div>Location</div>
          <div className="form-inline">
            <AppField field="location" placeholder="Location" />
          </div>
        </div>
        <div className="rightline">
          <div>Shorten Rotues</div>
          <div className="form-inline">
            <AppField
              field="shortenRoutes"
              placeholder="Shorten Routes .."
            />
          </div>
        </div>
        <div className="leftline">
          <div>Price to Apply</div>
          <div className="form-inline">
            <AppField
              field="priceToApply"
              type="number"
              placeholder="Price to Apply"
            />
          </div>
        </div>
        <div className="rightline">
          <div>Price</div>
          <div className="form-inline">
            <AppField
              field="mealPrice"
              type="number"
              placeholder="Meal Price"
            />
            <AppField
              field="federatedPrice"
              type="number"
              placeholder="Federated Price"
            />
          </div>
        </div>
        <button className="left-corner" type="submit">
          Save
        </button>
        <div style={{ marginTop: "300px" }}>
          <ServerError error={error} />
        </div>
      </div>
    </AppForm>
  );
}

export default CreateEventForm;

function ClientValidationError() {
  return (
    <div className=" mt-5 mb-5">
      <div>
        <AppError field="image" />
      </div>

      <div>
        <AppError field="title" />
      </div>

      <div>
        <AppError field="description" />
      </div>
      <div>
        <AppError field="applyDate" />
      </div>
      <div>
        <AppError field="applyTime" />
      </div>
      <div>
        <AppError field="eventDate" />
      </div>
      <div>
        <AppError field="eventTime" />
      </div>
      <div>
        <AppError field="location" />
      </div>
      <div>
        <AppError field="shortenRoutes" />
      </div>
      <div>
        <AppError field="priceToApply" />
      </div>
      <div>
        <AppError field="federatedPrice" />
      </div>
      <div>
        <AppError field="mealPrice" />
      </div>
    </div>
  );
}

const initialValues = {
  image: "",
  title: "",
  description: "",
  applyDate: "",
  applyTime: "",
  eventDate: "",
  eventTime: "",
  location: "",
  shortenRoutes: "",
  priceToApply: "",
  federatedPrice: "",
  mealPrice: "",
};
