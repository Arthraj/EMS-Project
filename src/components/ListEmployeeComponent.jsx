import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
    //bind the method to component instance
    this.handleAddEmployee=this.handleAddEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({
        employees: res.data,
      });
    });
  }
    

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>

        <div className="row">
          <button className="btn btn-success" > Add Employees</button>
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
              {this.state.employees.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.emailId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
