import React from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../services/baseUrl";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function PeopleList() {
  const [data, setData] = useState([]);
 

  //api call fn
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/users/list`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);



  const deleteUser = async (_id) => {
   try {
      // Make a POST request
      console.log(_id);
      const res = await axios.post(`http://localhost:5000/user/delete/${_id}`);
      console.log(res.status);
      console.log(res);
      if(res.status===200){
        alert(`Details of ${res.data.name} Deleted Successfully!`);
       fetchData()  
      }else if(res.status===404){
       alert(res.data);

      }
      //  handle success message goes here

    } catch (error) {
      // Handle errors
      alert("cant delete errorr occured")
      console.error("Error :", error);
    }
  };

  // console.log(data)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 ">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
            <div className="Parent mt-3 div">
              {/*----header-----*/}
              <div className="header d-flex mt-5 flex-row justify-content-between">
                <h2 className=" text-info ">Residents List</h2>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatinguser"
                    placeholder="Password"
                  />
                  <label for="floatinguser">
                    <i class="fa-solid mx-2 fa-magnifying-glass"></i>Search by
                    Name
                  </label>
                </div>
                <Link className="p-3" to={"/user/add"}>
                  <button className="btn px-4 py-2 btn-success">
                    Add New Resident{" "}
                  </button>{" "}
                </Link>
              </div>
              {/*----table-----*/}
              <table class="table mt-4 shadow table-secondary">
                <thead>
                  <tr>
                    <td>No</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>MOB NO</td>
                    <td>ROOM NO</td>
                    <td>JOIN DATE</td>
                    <td>RENT </td>
                    <td>ACTIONS</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item,index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.number}</td>
                      <td>{item.room}</td>
                      <td>{item.joinedDate}</td>
                      <td>{item.Rent}</td>
                      <td>
                        <button
                          onClick=
                          {()=>deleteUser(item._id)}
                          className="btn btn-danger mx-2">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
     
    </>
  );
}

export default PeopleList;
