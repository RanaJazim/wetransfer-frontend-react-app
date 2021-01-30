import React from "react";

import AdminLayout from "../../components/admin/admin_layout";
import { AppForm, AppField } from "../../components/app-form";

const CreateEvent = () => {
  return (
    <AdminLayout>
      <div className="">
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
        <AppForm>
          <div className="page-heading">
            <div className="patch" />
            <span className="page-name">Events</span>
            <label>
              {" "}
              Choose File
              <input type="file" size={60} />
            </label>
            <div>
              <br />

              <p>Event Name </p>
              <input type="text" className="inputs" placeholder="Event Name" />
              <p>Description of Event</p>
              <input
                className="input2 inputs"
                type="text"
                placeholder="Enter Information"
              />
              <br />
            </div>
            <div className="leftline">
              <p>Limite Inscicao</p>
              <div className="form-inline">
                <input type="text" placeholder="Selecionar Data" />
                <input type="text" placeholder="Introduza Hora Limite" />
              </div>
            </div>
            <div className="rightline">
              <p>Event Date</p>
              <div className="form-inline">
                <input type="text" placeholder="Selecionar Data" />
                <input type="text" placeholder=" Hora Evento" />
              </div>
            </div>
            <div className="leftline">
              <p>Limite Inscicao</p>
              <div className="form-inline">
                <input type="text" placeholder="Localizacao" />
              </div>
            </div>
            <div className="rightline">
              <p>Percursos</p>
              <div className="form-inline">
                <input type="text" placeholder="Intorduzir Percursos" />
              </div>
            </div>
            <div className="leftline">
              <p>Price to Apply</p>
              <div className="form-inline">
                <input type="text" placeholder="Selecionar Data" />
              </div>
            </div>
            <div className="rightline">
              <p>Price</p>
              <div className="form-inline">
                <input type="text" placeholder="Meal Price" />
                <input type="text" placeholder="Federated Price" />
              </div>
            </div>
            <button className="left-corner">Save</button>
          </div>
        </AppForm>
      </div>
    </AdminLayout>
  );
};

export default CreateEvent;
