import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([
    { firstName: "", lastName: "", emailId: "" },
  ]);
  const nav = useNavigate();

  useEffect(() => {
    console.log(id);
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const updateEmployeeData = () => {
    EmployeeService.updateEmployeeById(employee, id).then((res) =>
      nav("/employees")
    );
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto my-5">
          <h2>Update Employee Data</h2>

          <form method="POST" className="border p-3">
            <div className=" form-group">
              <label className="m-2">First Name</label>
              <input
                type="text"
                value={employee.firstName}
                onChange={(e) => handleUpdateEmployee(e)}
                className="form-control "
                name="firstName"
                aria-describedby="firstName"
                placeholder="Enter First Name"
              />

              <label className="m-2">Last Name</label>
              <input
                type="text"
                value={employee.lastName}
                onChange={(e) => handleUpdateEmployee(e)}
                className="form-control "
                name="lastName"
                aria-describedby="lastName"
                placeholder="Enter Last Name"
              />

              <label className="m-2">Email Id</label>
              <input
                type="email"
                value={employee.emailId}
                onChange={(e) => handleUpdateEmployee(e)}
                className="form-control "
                name="emailId"
                aria-describedby="emailId"
                placeholder="Enter Email Id"
              />
            </div>
            <div className="row my-3">
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary mx-3"
                  onClick={() => {
                    updateEmployeeData();
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-3"
                  onClick={() => {
                    nav("/employees");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
