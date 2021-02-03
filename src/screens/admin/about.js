import React from "react";

import { useApi } from "../../hooks";
import * as aboutService from "../../services/about";
import { AdminLayout, AboutForm, NavbarButtons } from "../../components/admin";
import { ServerError } from "../../components";

const AboutUsScreen = ({ isEdit, about }) => {
  const aboutApi = useApi(
    isEdit ? aboutService.updateAboutDetails : aboutService.createAboutDetails
  );

  const handleSubmit = async (formValues) => {
    console.log("create about details", formValues);
    try {
      await aboutApi.request(formValues);
      window.location.reload();
    } catch (ex) {}
  };

  return (
    <AdminLayout>
      {aboutApi.isLoading && <div className="spinner-border"></div>}
      {!aboutApi.isLoading && (
        <div className="">
          <NavbarButtons />

          <div className="page-heading">
            <AboutForm
              onSubmit={handleSubmit}
              isEdit={isEdit}
              formValues={about}
            />
            <div className="my-3">
              <ServerError error={aboutApi.error} />
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AboutUsScreen;
