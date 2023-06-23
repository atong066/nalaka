import React from "react";
import './Navbar.css'
import Button from '@mui/material/Button';
const navItems = ['Home', 'About', 'Contact'];
    
const Navbar =(props)=>{
    const { window } = props;
console.log(window);

const container = window !== undefined ? () => window().document.body : undefined;
console.log(container);
    return (
    <div className="navBar">
        <h1 className="logo"><a href="/">NALAKA</a></h1>
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