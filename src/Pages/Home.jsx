import React, { useState } from 'react'
import { Col,Row,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    //

  return (
   <>
<div className="container-fluid  bg-dark">
        <Row className="align-items-center p-5">
          <Col className="" sm={12} md={6}>
            <div className="div mx-5 ">
              <h1 className="text-primary fw-bold mb-4" style={{ fontSize: "50px" }}>
                Hostel Management System
              </h1>
              <p className="text-light mb-4">
              Now Equipped With All new Features starting from Rent collection, Resident Management,   Made easy 
              </p>
              <Link to={"login"}>
              <Button variant="primary mt-2">
                  GET STARTED{" "}
                  <i class="fa-solid fa-arrow-right mx-1 fa-fade"></i>
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              className="mx-4  p-3 img-fluid"
              style={{ borderRadius:"100px" ,height: "380px", width: "430px" }}
              src="https://c8.alamy.com/comp/2C87G8R/hostel-services-concept-vector-illustration-2C87G8R.jpg"
              alt="Hostel managemnt image"
            />
          </Col>
        </Row>
      </div>
   </>
  )
}

export default Home