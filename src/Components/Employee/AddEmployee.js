import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import  Container  from "@mui/material/Container";
import Card from '@mui/material/Card';
import './Employee.css'
import EmployeeDetailsForm from "./EmployeeDetailsForm";

const AddEmployee = () =>{
    
    const isOPen=true;
    return(
        <section className="section">
        <Sidebar statusMain={isOPen} statusSub={isOPen}></Sidebar>
        <Card className="mainContent" sx={{height:'86vh',overflowY:'scroll',width:'72%'}}>
         <Container maxWidth='false'>
         <EmployeeDetailsForm ></EmployeeDetailsForm>
         </Container>
        </Card>
       
        </section>
    )
}
export default AddEmployee;