import React from "react";

function Footer() {
  return (
    <>
<div className="conatiner-fluid">
  <div style={{ height: "200px"}} className="row bg-dark  d-flex align-items-center justify-content-center footer">
    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center footer ">
    <h4>
              <i class="fa-solid mx-2 fa-hotel"></i>
              Hostel Management System
            </h4>
            <p className="px-5 mt-3">
              Designed and built with all love in the world by React , bootsrtap and Node team.
              code liceaned by MIT
            </p>
    </div>
    <div className="col-lg-4 d-flex align-items-center justify-content-center">
    <h4 className="">Links</h4>

    </div>
    <div className="col-lg-4 d-flex align-items-center justify-content-center ">
    <h4>Guides</h4>

    </div>
  </div>
</div>

    </>
  );
}

export default Footer;
