import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "./css/Sidebar.css"
// import imge from "./img/download.png"
const Sidebar = () => {
  return(
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} className="sid">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            College Space
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home" className='h'>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notice" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book" className='h'>Notice</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/timetable" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book" className='h'>Time Table</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/placement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" className='h'>Placement</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/events" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='tree' className='h'>Feedback</CDBSidebarMenuItem>
            </NavLink>
           

            {/* <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '10px 4px',
            }}
          >
           {/* <img src={imge} className="sideimg" alt='profile'/> LogOut */}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;