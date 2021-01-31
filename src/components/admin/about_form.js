import React from "react";

import { AppForm, AppField, AppError } from "../app-form";
import { createAboutSchema, SERVER_BASE_URL } from "../../utils";

function AboutForm({ onSubmit, formValues, isEdit }) {
  const getInitialValues = () => {
    if (!isEdit) return initialValues;
    return {
      ...formValues,
      image: "",
    };
  };

  const getImage = () => {
    if (!isEdit) return initialValues.image;
    return SERVER_BASE_URL + "/" + formValues.imagePath;
  };

  return (
    <AppForm
      initialValues={getInitialValues()}
      validationSchema={createAboutSchema(isEdit)}
      handleSubmit={onSubmit}
    >
      <div className="">
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

          <div className="mt-3 mb-5">
            <img
              src={getImage()}
              width="100"
              height="100"
              className="card p-2"
            />
          </div>

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
          <button type="submit">{isEdit ? "Update" : "Save"}</button>
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
