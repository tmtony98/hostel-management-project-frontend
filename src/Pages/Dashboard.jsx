import React from "react";
import Sidebar from "../Components/Sidebar";
import RentView from "../Components/RentView";

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
            <RentView/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
