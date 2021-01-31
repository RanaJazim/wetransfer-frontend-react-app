import React, { useEffect } from "react";

import { useApi } from "../../hooks";
import * as aboutService from "../../services/about";
import { AboutUsScreen } from "../../screens/admin";

const CreateOrUpdateAbout = () => {
  const fetchAbout = useApi(aboutService.fetchSingleAbout);

  useEffect(() => {
    fetchAbout.request();
  }, []);

  return (
    <>
      {fetchAbout.isLoading && <p className="spinner-border"></p>}
      {!fetchAbout.isLoading && fetchAbout.res && (
        <AboutUsScreen about={fetchAbout.res.data} isEdit={true} />
      )}
      {!fetchAbout.isLoading && fetchAbout.error && (
        <AboutUsScreen isEdit={false} />
      )}
    </>
  );
};

export default CreateOrUpdateAbout;
