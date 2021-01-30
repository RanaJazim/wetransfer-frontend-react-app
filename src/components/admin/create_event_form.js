import React from "react";

import { AppField, AppError, AppForm } from "../app-form";
import { createEventSchema } from "../../utils";

function CreateEventForm({ onSubmit, formValues }) {
  return (
    <AppForm
      initialValues={formValues ?? initialValues}
      validationSchema={createEventSchema}
      handleSubmit={onSubmit}
    >
      <div className="page-heading">
        <div className="patch" />
        <span className="page-name">Events</span>

        <ClientValidationError />

        <label>
          {" "}
          Choose File
          <AppField field="image" type="file" size={60} />
        </label>
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
          <div>Limite Inscicao</div>
          <div className="form-inline">
            <AppField
              field="applyDate"
              type="date"
              placeholder="Selecionar Data"
            />
            <AppField field="applyTime" placeholder="Introduza Hora Limite" />
          </div>
        </div>
        <div className="rightline">
          <div>Event Date</div>
          <div className="form-inline">
            <AppField
              field="eventDate"
              type="date"
              placeholder="Selecionar Data"
            />
            <AppField field="eventTime" placeholder="Hora Evento" />
          </div>
        </div>
        <div className="leftline">
          <div>Limite Inscicao</div>
          <div className="form-inline">
            <AppField field="location" placeholder="Localizacao" />
          </div>
        </div>
        <div className="rightline">
          <div>Percursos</div>
          <div className="form-inline">
            <AppField
              field="shortenRoutes"
              placeholder="Intorduzir Percursos"
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