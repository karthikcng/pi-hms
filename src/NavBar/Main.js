// Main.js
import React from 'react';
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";



export const Main = () => {

  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path)
    
  }
  
  return (
    <div className='maincontainer'>
      <div className='leftcontainer'>
      <p onClick={()=>handleNavigation('/patient')} >sidebar</p>
      <p onClick={()=>handleNavigation('/inpatient')} >sidebar</p>
      
      </div>
      <div className='rightcontainer'>
      <Outlet />
      </div>
    </div>
  );
};
