import React from "react";
import { useState,useEffect } from "react";
import './Navbar.css'
import Button from '@mui/material/Button';
const navItems = ['Home', 'About', 'Contact'];
const Navbar =( )=>{
    const [screenSize,setScreenSize]=useState(getCurrentDimesions())
    function getCurrentDimesions(){
        return{
            width:window.innerWidth
        }
    }
    useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimesions())
        }
        window.addEventListener('resize', updateDimension);    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

    return (
    <div className="navBar">
        <h1 className="logo"><a href="/">{screenSize.width}</a></h1>
        <div className="navItems">
                <ul>
                {navItems.map((item) => (
              <li key={item} sx={{ color: '#fff' }}>
                <a href={item}>{item}</a>
              </li>
            ))}
                </ul>

        </div>
        <div className="loginButton">
            <Button variant="contained" color="success">
            Login
            </Button>
        </div>
    </div>
    )
}
export default Navbar;