// SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <Link to="/patient">hii</Link>
      <Link to="/inpatient">hello</Link>
    </div>
  );
};
