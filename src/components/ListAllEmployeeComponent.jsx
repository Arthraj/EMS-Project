import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Alert } from "bootstrap";

const ListAllEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, [employees]);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>

      <div className="row ">
        <button
          className="btn btn-success my-3 w-25 mx-auto"
          onClick={() => nav("/add-employees")}
        >
          {" "}
          Add Employees
        </button>
      </div>

      <div className="row ">
        <table className="table table-striped table-bordered">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email id</th>
            <th>Actions</th>
          </thead>

          <tbody>
            {employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.emailId}</td>
                  <td>
                    <button
                      onClick={() => nav(`/update-employees/${emp.id}`)}
                      className="btn btn-info text-light"
                    >
                      Update
                    </button>

                    <button
                      onClick={() =>
                        EmployeeService.deleteEmployeeById(emp.id).then(
                          (res) => {
                            Alert();
                          }
                        )
                      }
                      className="btn btn-danger text-light mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListAllEmployeeComponent;
