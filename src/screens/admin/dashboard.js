import React from "react";

import AdminLayout from "../../components/admin/admin_layout";

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
                  {/* Card Header - Dropdown */}
                  <div className=" px-2 py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0">Inscriptions</h6>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    <canvas id="myPieChart">400</canvas>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className=" px-2 py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0">Idades</h6>
                  </div>
                  <div className="card-body">
                    <canvas id="myBarChart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
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
                <tr>
                  <td>001</td>
                  <td>2004-07-06</td>
                  <td>Angeline Mcclain</td>
                  <td>Rosser</td>
                  <td>176-026-5992</td>
                  <td className="btn-pending">
                    <button>Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>2004-07-06</td>
                  <td>Angeline Mcclain</td>
                  <td>Rosser</td>
                  <td>176-026-5992</td>
                  <td className="btn-accepted">
                    <button>Accepted</button>
                  </td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>2004-07-06</td>
                  <td>Angeline Mcclain</td>
                  <td>Rosser</td>
                  <td>176-026-5992</td>
                  <td className="btn-pending">
                    <button>Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>2004-07-06</td>
                  <td>Angeline Mcclain</td>
                  <td>Rosser</td>
                  <td>176-026-5992</td>
                  <td className="btn-pending">
                    <button>Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>2004-07-06</td>
                  <td>Angeline Mcclain</td>
                  <td>Rosser</td>
                  <td>176-026-5992</td>
                  <td className="btn-accepted">
                    <button>Accepted</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardScreen;
