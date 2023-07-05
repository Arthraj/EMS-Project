import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASE_API_URL);
  }

  newEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_API_URL, employee);
  }

  getEmployeeById(eid) {
    return axios.get(EMPLOYEE_BASE_API_URL + "/" + eid);
  }

  updateEmployeeById(employee, eid) {
    return axios.put(EMPLOYEE_BASE_API_URL + "/" + eid, employee);
  }
  deleteEmployeeById(eid) {
    return axios.delete(EMPLOYEE_BASE_API_URL + "/" + eid);
  }
}

export default new EmployeeService();
// here we are returning the object of this class, not the class
// so that we can directly use object of this class inside a component
