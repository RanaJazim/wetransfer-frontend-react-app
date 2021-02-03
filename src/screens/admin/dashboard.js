import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout } from "../../components/admin";

const DashboardScreen = () => {
  const data = [
    ["Month", "Revenue", { role: "style" }],
    ["Jan", 8, "#2c8850"],
    ["Feb", 10, "#2c8850"],
    ["Mar", 19, "#2c8850"],
    ["Apr", 21, "#2c8850"],
    ["May", 23, "#2c8850"],
    ["Jun", 32, "#2c8850"],
    ["Jul", 1, "#2c8850"],
    ["Aug", 2, "#2c8850"],
    ["Sep", 54, "#2c8850"],
    ["Oct", 23, "#2c8850"],
    ["Nov", 54, "#2c8850"],
    ["Dec", 25, "#2c8850"],
  ];

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
                  <p>Revenue</p>
                  <Chart
                    chartType="ColumnChart"
                    loader={<div>Loading Chart ...</div>}
                    data={data}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />

          <EventRegistrations />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardScreen;

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
