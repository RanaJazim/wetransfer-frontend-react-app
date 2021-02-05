import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ClientLayout } from "../../components/client";
import { SERVER_BASE_URL } from "../../utils";

const EventRegisterStepTwoScreen = () => {
  const { state } = useLocation();

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
            <div className="row mt-3">
              <div className="col-xl-3">
                <h6>Meal Price</h6>
              </div>
              <div className="col-xl-3">
                <h6>${state.summary.mealPrice}</h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3">
                <h6>Federated Price</h6>
              </div>
              <div className="col-xl-3">
                <h6>${state.summary.federatedPrice}</h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3">
                <h6>Event Registration Price</h6>
              </div>
              <div className="col-xl-3">
                <h6>${state.summary.eventRegPrice}</h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3">
                <h6>Total</h6>
              </div>
              <div className="col-xl-3">
                <h6>${state.summary.totalPrice}</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src={`${SERVER_BASE_URL}/${state.summary.eventImage}`}
              height="400px"
            />
          </div>
        </div>
        <div className="float-end mb-5">
          <Link to="/events">
            <button className="btn btn-success p-4 pt-1 pb-2">
              Back to Site
            </button>
          </Link>
        </div>
      </main>
    </ClientLayout>
  );
};

export default EventRegisterStepTwoScreen;
