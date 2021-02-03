import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout } from "../../components/admin";

const DashboardScreen = () => {
  return (
    <AdminLayout>
      <div className="">
        <header>
          <div className="right-corner">
            <span>
              <img className="user3" src="icons/user.png" width="40px" />
            </span>
            <span className="name">Nome Admin</span>
            <span>
              <img src="icons/bell.png" width="25px" />
            </span>
            <span>
              <img src="icons/power.png" width="25px" />
            </span>
          </div>
        </header>
        <div className="page-heading">
          <div className="patch" />
          <span className="page-name">Dashboard</span>
          <br />
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Content Row */}
            <RegistrationSummary />
          </div>
          <br />

          <EventRegistrations />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardScreen;

function RegistrationSummary() {
  const [ageSummary, setAgeSummary] = useState([]);
  const eventApi = useApi(eventService.registrationSummaryForCurrentEvent);

  useEffect(() => {
    eventApi.request().then((res) => {
      let ageSummary = [];
      ageSummary.push(["Age", "No. of People"]);

      for (const rec of res.data.ageSummary) {
        for (const key in rec) {
          ageSummary.push([key, rec[key]]);
        }
      }

      setAgeSummary(ageSummary);
    });
  }, []);

  const data = [
    ["Age", "No. of People"],
    ["<25", 2],
    ["25-35", 1],
    ["36-50", 5],
    [">50", 0],
  ];

  console.log(ageSummary);

  return (
    <>
      {eventApi.isLoading && <div className="spinner-border"></div>}
      {!eventApi.isLoading && eventApi.res && (
        <div className="row">
          {/*Valor Total */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div
              className="card shadow h-100 py-2"
              style={{ background: "#2c8850", color: "#fff" }}
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold  text-uppercase mb-1">
                      Valor Total
                    </div>
                    <div className="h5 mb-0 font-weight-bold">$40,000</div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="card shadow h-100 py-2"
              style={{ background: "#2c8850", color: "#fff" }}
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold  text-uppercase mb-1">
                      Inscripto
                    </div>
                    <div className="h5 mb-0 font-weight-bold">500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pie Chart */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow mb-4">
              <p>Inscriptions</p>
              <Chart
                chartType="PieChart"
                loader={<div>Loading Chart ...</div>}
                data={[
                  ["Task", "Hours per Day"],
                  ["Male", 11],
                  ["Female", 2],
                ]}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow mb-4">
              <p>No of people register w.r.t to age</p>
              <Chart
                chartType="ColumnChart"
                loader={<div>Loading Chart ...</div>}
                data={ageSummary}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EventRegistrations() {
  const eventApi = useApi(eventService.allRegistrationsForEvent);

  useEffect(() => {
    eventApi.request();
  }, []);

  return (
    <>
      {eventApi.isLoading && <div className="spinner-border"></div>}

      {!eventApi.isLoading && eventApi.res && (
        <div className="row">
          <div className="col-lg-12">
            <section className="panel-heading">
              <header className="panel">
                Subscribers{" "}
                <button className="right-corner">Export Excel</button>{" "}
              </header>
            </section>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>Nuero</th>
                <th>Nome</th>
                <th>Date</th>
                <th>NIF</th>
                <th>Contacto</th>
                <th>Estado Pegamento</th>
              </tr>

              {eventApi.res.data.map((reg) => (
                <tr key={reg.id}>
                  <td>{reg.id}</td>
                  <td>{reg.name}</td>
                  <td> {reg.dateOfBirth}</td>
                  <td>{reg.nif}</td>
                  <td>{reg.phone}</td>
                  <td className="btn-pending">
                    <button>Pending</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
