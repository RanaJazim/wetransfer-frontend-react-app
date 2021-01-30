import React from "react";

import AdminLayout from "../../components/admin/admin_layout";
import { AppForm, AppField, AppError } from "../../components/app-form";
import { createEventSchema } from "../../utils";

const CreateEvent = () => {
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
        <CreateEventForm />
      </div>
    </AdminLayout>
  );
};

export default CreateEvent;

function CreateEventForm() {
  const handleSubmit = ({ formValues }) => {
    console.log("create event ..", formValues);
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={createEventSchema}
      handleSubmit={handleSubmit}
    >
      <div className="page-heading">
        <div className="patch" />
        <span className="page-name">Events</span>
        <div className=" mt-5 mb-5">
          <p>
            <AppError field="image" />
          </p>

          <p>
            <AppError field="title" />
          </p>

          <p>
            <AppError field="description" />
          </p>
          <p>
            <AppError field="applyDate" />
          </p>
          <p>
            <AppError field="applyTime" />
          </p>
          <p>
            <AppError field="eventDate" />
          </p>
          <p>
            <AppError field="eventTime" />
          </p>
          <p>
            <AppError field="location" />
          </p>
          <p>
            <AppError field="shortenRoutes" />
          </p>
          <p>
            <AppError field="priceToApply" />
          </p>
          <p>
            <AppError field="federatedPrice" />
          </p>
          <p>
            <AppError field="mealPrice" />
          </p>
        </div>
        <label>
          {" "}
          Choose File
          <AppField field="image" type="file" size={60} />
        </label>
        <div>
          <br />

          <p>Event Name </p>
          <AppField field="title" className="inputs" placeholder="Event Name" />

          <p>Description of Event</p>
          <AppField
            field="description"
            className="input2 inputs"
            placeholder="Enter Information"
          />
          <br />
        </div>
        <div className="leftline">
          <p>Limite Inscicao</p>
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
          <p>Event Date</p>
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
          <p>Limite Inscicao</p>
          <div className="form-inline">
            <AppField field="location" placeholder="Localizacao" />
          </div>
        </div>
        <div className="rightline">
          <p>Percursos</p>
          <div className="form-inline">
            <AppField
              field="shortenRoutes"
              placeholder="Intorduzir Percursos"
            />
          </div>
        </div>
        <div className="leftline">
          <p>Price to Apply</p>
          <div className="form-inline">
            <AppField
              field="priceToApply"
              type="number"
              placeholder="Price to Apply"
            />
          </div>
        </div>
        <div className="rightline">
          <p>Price</p>
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
