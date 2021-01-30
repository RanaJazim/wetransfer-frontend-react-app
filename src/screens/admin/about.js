import React from "react";

import { AdminLayout } from "../../components/admin";
import { AppForm, AppField, AppError } from "../../components/app-form";
import { createAboutSchema } from "../../utils";

const AboutUsScreen = () => {
  const handleSubmit = ({ formValues }) => {
    console.log("create about details", formValues);
  };

  return (
    <AdminLayout>
      <div className="">
        <div className="right-corner">
          <span>
            <img className="user3" src="icons/user.png" width="40px" />
          </span>
          <span className="name">Admin Name</span>
          <span>
            <img src="icons/bell.png" width="25px" />
          </span>
          <span>
            <img src="icons/power.png" width="25px" />
          </span>
        </div>
        <AppForm
          initialValues={initialValues}
          validationSchema={createAboutSchema}
          handleSubmit={handleSubmit}
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
      </div>
    </AdminLayout>
  );
};

export default AboutUsScreen;

const initialValues = {
  image: "",
  title: "",
  description: "",
};
