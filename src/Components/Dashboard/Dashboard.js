import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Dashboard.css'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import PersonIcon from '@mui/icons-material/Person';
import { nanoid } from "@reduxjs/toolkit";
const Dashboard = () =>{
    const isOPen=false;
    console.log(nanoid())
    return(
        <section className="section">
            <Sidebar statusMain={isOPen} statusSub={isOPen}></Sidebar>
            <Card className="mainContent">
            <Container maxWidth="xl" className="cardContainer">
                    <Card className="cardItem" style={{  background: '#e1812d'}}>
                        <PersonIcon  style={{ fontSize: '4.2rem', color: '#575555' }}/>
                        <div class="def">
                            <span><h1>123</h1></span>
                            <span><h3>Employees</h3></span>
                        </div>
                    </Card>
                    <Card className="cardItem" style={{  background: '#78d241'}}>
                        hello
                    </Card>
                    <Card className="cardItem" style={{  background: '#418cd2'}}>
                        hello
                    </Card>
                    <Card className="cardItem" style={{  background: '#d0d241'}}>
                        hello
                    </Card>
                </Container>
            </Card>
        </section>
    )
}
export default Dashboard;