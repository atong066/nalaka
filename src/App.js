import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFound from "./Components/RouteValidation/NoRoute";
import EmployeeList from "./Components/Employee/EmployeeList";
import AddEmployee from "./Components/Employee/AddEmployee";
import Client from "./Components/Client/Client";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Settings" element={<Dashboard/>}></Route>
      <Route path="/add-employee" element={<AddEmployee/>}></Route>
      <Route path="/employee-list" element={<EmployeeList/>}></Route>
      <Route path="/Client" element={<Client/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="*" element={<NotFound/>} status={404} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
