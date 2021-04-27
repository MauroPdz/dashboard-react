import React from 'react';
import SidebarNavItem from './SidebarNavItem'
import logo from '../assets/images/logo-DH.png';

function Sidebar(){
  return (
    /* Sidebar */
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        {/* Sidebar - Brand  */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"></hr>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span></a>
        </li>
  
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"></hr>
  
        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        <SidebarNavItem />

    </ul>
  )

}
export default Sidebar;