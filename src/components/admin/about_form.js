import React from "react";

import { AppForm, AppField, AppError } from "../app-form";
import { createAboutSchema } from "../../utils";

function AboutForm({ onSubmit, formValues }) {
  return (
    <AppForm
      initialValues={formValues ?? initialValues}
      validationSchema={createAboutSchema}
      handleSubmit={onSubmit}
    >
      <div className="page-heading">
        <div className="patch" />
        <span className="page-name">About Us</span>
        <div>
          <br />
          <label>
            {" "}
            Choose File
            <AppField field="image" type="file" size={60} />
            <AppError field="image" />
          </label>
          <p>Title</p>
          <AppField field="title" className="inputs" placeholder="Titulo" />
          <AppError field="title" />

          <p>Information about</p>

          <AppField
            field="description"
            className="input2 inputs"
            placeholder="Enter Information"
          />
          <AppError field="description" />
          <br />
          <button type="submit">Save</button>
          <br />
        </div>
      </div>
    </AppForm>
  );
}

export default AboutForm;

const initialValues = {
  image: "",
  title: "",
  description: "",
};
