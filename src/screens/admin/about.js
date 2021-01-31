import React, { useState } from "react";

import { useApi } from "../../hooks";
import * as aboutService from "../../services/about";
import { AdminLayout, AboutForm } from "../../components/admin";
import { ServerError } from "../../components";

const AboutUsScreen = ({ isEdit, about }) => {
  const [aboutDetail, setAboutDetail] = useState(about);
  const aboutApi = useApi(
    isEdit ? aboutService.updateAboutDetails : aboutService.createAboutDetails
  );

  const handleSubmit = async ({ formValues }) => {
    console.log("create about details", formValues);
    try {
      const res = await aboutApi.request(formValues);
      setAboutDetail(res.data);
    } catch (ex) {}
  };

  return (
    <AdminLayout>
      {aboutApi.isLoading && <div className="spinner-border"></div>}
      {!aboutApi.isLoading && (
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

          <div className="page-heading">
            <AboutForm
              onSubmit={handleSubmit}
              isEdit={isEdit}
              formValues={aboutDetail}
            />
            <div className="my-3"><ServerError error={aboutApi.error} /></div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AboutUsScreen;
