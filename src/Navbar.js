import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import {  useNavigate} from 'react-router';

export const NavBar = () => {
  const navigate =useNavigate()
  
  const login = ()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
  return (
    <>
      <nav className="menu-links">
        <h3 className="logo">Grid Manager 2.0</h3>

        <ul className="nav-links">
          <NavLink
            to="/inpiration"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-dashcube" aria-hidden="true"></i></span>DashBoard</li>
          </NavLink>
          <NavLink
            to="/pre"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-database" aria-hidden="true"></i></span>Find Work</li>
          </NavLink>
          <NavLink
            to="/pre"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-bar-chart" aria-hidden="true"></i></span>Learn Design</li>
          </NavLink>
          <NavLink
            to="/pre"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-delicious" aria-hidden="true"></i></span>Go pro</li>
          </NavLink>
          <NavLink
            to="/pre"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-asterisk" aria-hidden="true"></i></span>Design </li>
          </NavLink>
        </ul>

        <ul className="nav2-links">
          <NavLink to="/" className="sign">
            <li onClick={()=>login()}><span style={{marginRight:"10px"}}><i class="fa fa-power-off" aria-hidden="true"></i></span>LogOut</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
