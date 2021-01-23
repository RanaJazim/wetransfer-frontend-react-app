import React from "react";
import Footer from "./footer";

import Navbar from "./navbar";

const ClientLayout = ({ children, isFooter = true }) => {
  return (
    <React.Fragment>
      <Navbar />

      {children}

      {isFooter && <Footer />}
    </React.Fragment>
  );
};

export default ClientLayout;
