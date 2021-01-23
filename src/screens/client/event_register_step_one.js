import React from "react";

import { ClientLayout } from "../../components/client";

const EventRegisterStepOneScreen = () => {
  return (
    <ClientLayout isFooter={false}>
      <main className="m-4 ps-3">
        <h1>Inscription</h1>
        <div className="row">
          <h4>Rota de Lamperia-BTT</h4>
          <p>Full de Form</p>
        </div>
        <form className="row g-3" action="EventSignUp3.html">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="col-md-5 ms-5">
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              id="inputBirthday"
              placeholder="Birth date"
            />
          </div>
          <div className="col-md-4">
            <select id="inputState" className="form-select">
              <option selected>Gender</option>
              <option>Male</option>
              <option>Femmale</option>
              <option>Not Specified</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address"
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control mt-2"
              id="inputdoor"
              placeholder="door"
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control mt-2"
              id="inputfloor"
              placeholder="floor"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control mt-2"
              id="inputZipcode"
              placeholder="Zip code"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="inputNIF"
              placeholder="NIF"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="inputTeam"
              placeholder="Team name"
            />
          </div>
          <div className="col-md-4">
            <select id="inputCategory" className="form-select">
              <option selected>Category</option>
              <option>Master 20</option>
              <option>Master 30</option>
              <option>Master 40</option>
            </select>
          </div>
          <div className="row mt-5">
            <div className="col-xl-2">
              <div className="form-check">
                <input className="form-input" type="checkbox" id="gridCheck1" />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="form-check">
                <input className="form-input" type="checkbox" id="gridCheck1" />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="form-check">
                <label
                  className="form-check-label"
                  style={{
                    padding: 0,
                    marginTop: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue
                  />
                  Option 1
                </label>
              </div>
              <div className="form-check">
                <span className="mt-5">Meal</span>
                <input className="" type="checkbox" id="gridCheck1" />
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <p className="form-label">Tm algyma algeria? Informato</p>
            <input type="text" className="form-control p-5" />
          </div>
          <div className="col-md-4">
            <p>Number of Companions</p>
            <select id="inputCompanionNumber" className="form-select">
              <option selected>Number of Companions</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="float-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-success float-end">
                Continue
              </button>
            </div>
          </div>
        </form>
      </main>
    </ClientLayout>
  );
};

export default EventRegisterStepOneScreen;
