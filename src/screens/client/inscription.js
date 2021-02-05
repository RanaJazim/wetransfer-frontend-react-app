import React from "react";

import { ClientLayout } from "../../components/client";

const InscriptionScreen = () => {
  const items = [1, 2, 3, 4];

  return (
    <ClientLayout>
      <main className="ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <p>
            Cras tristique tincidunt enim. Quisque vulputate nulla sodales,
            tempus neque a, mattis justo.
          </p>
        </div>
        <div className="row justify-content-md-center mb-3">
          {items.map((_, i) => (
            <SingleInscription key={i} />
          ))}
        </div>
      </main>
    </ClientLayout>
  );
};

export default InscriptionScreen;

function SingleInscription() {
  return (
    <div className="col-xl-4 my-3">
      <div className="back">
        <img src="icons/CARTAZFINAL.jpg" width="250px" height="350px" />
        <div className="float-center ms-0">
          <a href="EventSignUp.html">
            <button className="btn btn-success m-2" type="button">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
