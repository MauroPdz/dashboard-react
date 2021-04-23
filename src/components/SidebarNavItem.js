import React from 'react';


function SidebarNavItem(){
  return (
    <div>
      {/* Nav Item - Pages   */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
        </li>
  
        {/*  Nav Item - Charts  */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>
  
        {/*   Nav Item - Tables  */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>
  
        {/*   Divider   */}
        <hr className="sidebar-divider d-none d-md-block"></hr>
    </div>
  )

}
export default SidebarNavItem;