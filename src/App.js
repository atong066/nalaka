import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/RouteValidation/NoRoute";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="*" element={<NotFound/>} status={404} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
