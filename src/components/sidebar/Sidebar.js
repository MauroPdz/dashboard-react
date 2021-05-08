import React from 'react';
import SidebarNavItem from './SidebarNavItem'
import logo from '../../assets/images/logo.png';


function Sidebar(){
  return (
    /* Sidebar */
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion p-3" id="accordionSidebar">
        
        {/* Sidebar - Brand  */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon m-4">
            <img className="w-75" src={logo} alt="Geek Studio" />
          </div>
        </a>
        <br/>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"></hr>
        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Geek Studio</span></a>
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