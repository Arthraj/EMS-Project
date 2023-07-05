import "./App.css";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListAllEmployeeComponent from "./components/ListAllEmployeeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" Component={ListAllEmployeeComponent}></Route>
            <Route
              path="/employees"
              Component={ListAllEmployeeComponent}
            ></Route>
            <Route
              path="/add-employees"
              Component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/update-employees/:id"
              Component={UpdateEmployeeComponent}
            ></Route>
          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
