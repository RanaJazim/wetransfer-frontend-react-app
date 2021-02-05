import React, { useEffect } from "react";

import { useApi } from "../../hooks";
import * as aboutService from "../../services/about";
import { ClientLayout } from "../../components/client";
import { SERVER_BASE_URL } from "../../utils";

const AboutUsClientScreen = () => {
  const aboutApi = useApi(aboutService.fetchSingleAbout);

  useEffect(() => {
    aboutApi.request();
  }, []);

  return (
    <ClientLayout>
      {aboutApi.isLoading && <div className="spinner-border"></div>}
      {!aboutApi.isLoading && aboutApi.res && (
        <>
          <main>
            <h1 className="ps-5">About Us</h1>
            <div className="row">
              <div className="col-xl-4 m-5 p-2 pt-0 mt-0">
                <h2>{aboutApi.res.data.title}</h2>
                <h6>{aboutApi.res.data.description}</h6>
              </div>
              <div className="col-xl-2 m-5 justify-content-end">
                <div>
                  <img
                    src={`${SERVER_BASE_URL}/${aboutApi.res.data.imagePath}`}
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </ClientLayout>
  );
};

export default AboutUsClientScreen;
