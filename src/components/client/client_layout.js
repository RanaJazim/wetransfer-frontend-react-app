import React from "react";

import Navbar from "./navbar";

const ClientLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />

      {children}
    </React.Fragment>
  );
};

export default ClientLayout;
