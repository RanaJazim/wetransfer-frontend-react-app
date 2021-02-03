import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import { useApi } from "../../hooks";
import * as eventService from "../../services/event";
import { AdminLayout, NavbarButtons } from "../../components/admin";

const DashboardScreen = () => {
  return (
    <AdminLayout>
      <div className="">
        <NavbarButtons />

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
  const [entryFound, setEntryFound] = useState({
    hasGender: false,
    hasAge: false,
  });
  const [isAgeDataFound, setIsAgeFound] = useState(false);
  const [isGenderDataFound, setIsGenderDataFound] = useState(false);
  const [ageSummary, setAgeSummary] = useState([]);
  const [genderSummary, setGenderSummary] = useState([]);
  const eventApi = useApi(eventService.registrationSummaryForCurrentEvent);

  useEffect(() => {
    eventApi.request().then((res) => {
      if (res) {
        const { ageSummary, male, female } = res.data;

        addDataToAgeSummary(ageSummary);
        addDataToGenderSummary(male, female);
      }
    });
  }, []);

  const addDataToAgeSummary = (summary) => {
    let ageSummary = [];
    ageSummary.push(["Age", "No. of People"]);

    if (summary.length > 0) {
      setIsAgeFound(true);

      for (const rec of summary) {
        for (const key in rec) {
          ageSummary.push([key, rec[key]]);
        }
      }
    }

    setAgeSummary(ageSummary);
  };

  const addDataToGenderSummary = (male, female) => {
    const genderSummary = [];
    genderSummary.push(["Gender", "Count"]);

    if (!male && !female) {
      genderSummary.push(["male", 0]);
      genderSummary.push(["female", 0]);
    } else {
      setIsGenderDataFound(true);
      genderSummary.push(["male", male]);
      genderSummary.push(["female", female]);
    }

    setGenderSummary(genderSummary);
  };

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
                      Grand Total
                    </div>
                    <div className="h5 mb-0 font-weight-bold">
                      ${eventApi.res.data.totalPrice}
                    </div>
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
                    <div className="h5 mb-0 font-weight-bold">
                      {eventApi.res.data.total}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pie Chart */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow mb-4">
              {isGenderDataFound ? (
                <>
                  <p>Gender Group (male, female)</p>
                  <Chart
                    chartType="PieChart"
                    loader={<div>Loading Chart ...</div>}
                    data={genderSummary}
                    rootProps={{ "data-testid": "1" }}
                  />
                </>
              ) : (
                <p>Sorry there is no data of gender to plot</p>
              )}
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow mb-4">
              {isAgeDataFound ? (
                <>
                  <p> Age Group </p>
                  <Chart
                    chartType="ColumnChart"
                    loader={<div>Loading Chart ...</div>}
                    data={ageSummary}
                  />
                </>
              ) : (
                <p>Sorry there is no data related to age to plot .</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EventRegistrations() {
  const eventApi = useApi(eventService.allRegistrationsForEvent);
  const eventStatusApi = useApi(eventService.updateStatus, {
    isThrowErr: true,
  });

  useEffect(() => {
    eventApi.request();
  }, []);

  const handleUpdateStatus = (regEvent) => {
    if (!regEvent.isPending) {
      const result = window.confirm(
        "Are you sure to change the status approved to pending."
      );
      if (result) {
        updateStatus(regEvent.id);
      }
    } else {
      updateStatus(regEvent.id);
    }
  };

  const updateStatus = async (id) => {
    try {
      await eventStatusApi.request(id);
      window.location.reload();
    } catch (_) {}
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {eventApi.isLoading && <div className="spinner-border"></div>}

      {!eventApi.isLoading && eventApi.res && (
        <div className="row">
          <div className="col-lg-12">
            <section className="panel-heading">
              <header className="panel">
                Subscribers{" "}
                {/* <button className="right-corner">Export Excel</button>{" "} */}
              </header>
            </section>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>NIF</th>
                <th>Contact No</th>
                <th>Status</th>
              </tr>

              {eventApi.res.data.map((reg) => (
                <tr key={reg.id}>
                  <td>{reg.id}</td>
                  <td>{reg.name}</td>
                  <td> {reg.dateOfBirth}</td>
                  <td>{reg.nif}</td>
                  <td>{reg.phone}</td>
                  <td
                    className={reg.isPending ? "btn-pending" : "btn-accepted"}
                  >
                    <button
                      type="button"
                      onClick={() => handleUpdateStatus(reg)}
                    >
                      {reg.isPending ? "Pending" : "Approved"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
