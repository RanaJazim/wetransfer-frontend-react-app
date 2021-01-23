import React from "react";

import { ClientLayout } from "../../components/client";

const EventRegisterStepThreeScreen = () => {
  return (
    <ClientLayout isFooter={false}>
      <main className="m-4 ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <h4>Rota de Lamperia-BTT</h4>
          <p>Payment Method</p>
        </div>
        <div className="row mb-5">
          <div className="col-xl-4 m-5 p-2 pt-0 mt-0">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Online
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Cash
              </label>
            </div>
          </div>
          <div className="col-xl-5 ms-5 justify-content-end">
            <img src="/assets/images/event.jpg" height="400px" />
          </div>
        </div>
        <div className="float-end mb-5">
          <a href="#">
            <button className="btn btn-outline-success p-3 pt-1 pb-2">
              Cancel
            </button>
          </a>
          <a href="ConfirmPayment2.html">
            <button className="btn btn-success p-4 pt-1 pb-2">Confirm</button>
          </a>
        </div>
      </main>
    </ClientLayout>
  );
};

export default EventRegisterStepThreeScreen;
