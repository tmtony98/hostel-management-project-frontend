import React from "react";
import { Form } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center  align-items-center"
      >
        <div className="container d-flex  flex-column justify-content-center  ">
          <div style={{ marginLeft: "100px" }} className=" p-1 text-primary  ">
          </div>

          <div
            style={{ width: "65vw", marginLeft: "10%" }}
            className="row  d-flex flex-row justify-content-center  rounded bg-dark"
          >
            <div className="col-lg-6  d-flex justify-content-end px-1 align-items-center">
              <img
                className="img-fluid"
                style={{
                  height: "400px",
                  borderRadius: "300px",
                  padding: "50px",
                }}
                src="https://i.pinimg.com/564x/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.jpg"
                alt="login/register image"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-start justify-content-start">
              <h2 className="text-primary fw-bold mt-4">Login Form</h2>
              <Form className="w-75 mt-5 ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
              <NavLink to={"/Dashboard"}> <button className="btn px-3 btn-primary">Login</button></NavLink>
             
              <p className="text-danger">Not having an account?Click to Register!</p>


            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
