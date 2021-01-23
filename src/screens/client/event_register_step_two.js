import React from "react";

import { ClientLayout } from "../../components/client";

const EventRegisterStepTwoScreen = () => {
  return (
    <ClientLayout isFooter={false}>
      <main className="m-4 ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <h4>Rota de Lamperia-BTT</h4>
          <p>Order Summary</p>
        </div>
        <div className="row mb-5">
          <div className="col-xl-6">
            <div className="row mt-5">
              <div className="col-xl-3">
                <h6>Cras tristique</h6>
              </div>
              <div className="col-xl-3">
                <h6>$12</h6>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xl-3">
                <h6>Cras tristique</h6>
              </div>
              <div className="col-xl-3">
                <h6>$12</h6>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xl-3">
                <h6>Total</h6>
              </div>
              <div className="col-xl-3">
                <h6>$24</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img src="/assets/images/event.jpg" height="400px" />
          </div>
        </div>
        <div className="float-end mb-5">
          <a href="#">
            <button className="btn btn-outline-success p-3 pt-1 pb-2">
              Cancel
            </button>
          </a>
          <a href="ConfirmPayment.html">
            <button className="btn btn-success p-4 pt-1 pb-2">Pay</button>
          </a>
        </div>
      </main>
    </ClientLayout>
  );
};

export default EventRegisterStepTwoScreen;
