import React from "react";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function CreateEmployeeComponent() {
  const [employee, setEmployee] = useState();
  const nav = useNavigate();

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const createEmployee = () => {
    EmployeeService.newEmployee(employee).then((response) => nav("/employees"));
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto my-5">
          <h2>Add New Employee</h2>

          <form method="POST" className="border p-3">
            <div className=" form-group">
              <label className="m-2">First Name</label>
              <input
                type="text"
                onChange={(e) => handleAddEmployee(e)}
                className="form-control "
                name="firstName"
                aria-describedby="firstName"
                placeholder="Enter First Name"
              />

              <label className="m-2">Last Name</label>
              <input
                type="text"
                onChange={(e) => handleAddEmployee(e)}
                className="form-control "
                name="lastName"
                aria-describedby="lastName"
                placeholder="Enter Last Name"
              />

              <label className="m-2">Email Id</label>
              <input
                type="email"
                onChange={(e) => handleAddEmployee(e)}
                className="form-control "
                name="emailId"
                aria-describedby="emailId"
                placeholder="Enter Email Id"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary my-5"
              onClick={() => createEmployee()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
