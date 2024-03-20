import React from 'react'
import {Sidebar, SidebarLogo} from 'flowbite-react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaChartBar, FaExchangeAlt, FaMoneyBill, FaMoneyCheck, FaRandom, FaTools, FaUser, FaUsers } from 'react-icons/fa'
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,CDBIcon } from 'cdbreact'

const SidebarComponent = () => {
  return (
    // <Sidebar>
    //   <Sidebar.Items>
    //     <Sidebar.ItemGroup>
    //       <Link to="/overview">
    //           <Sidebar.Item> 
    //           <div className='flex items-center'>
    //             <FaChartBar className='mr-2'/>
    //             Overview
    //           </div>
    //           </Sidebar.Item>
    //       </Link>
    //       <Link to="/transactions" ><Sidebar.Item>
    //         <div className='flex items-center'>
    //           <FaMoneyBill className='mr-2'/>
    //           Transactions
    //         </div>
    //       </Sidebar.Item></Link>
    //       <Link to="/transfers">
    //         <Sidebar.Item>
    //         <div className='flex items-center'>
    //           <FaMoneyCheck className='mr-2'/>
    //           Transfers
    //         </div>
    //         </Sidebar.Item>
    //       </Link>
    //       <Link to="/service">
    //         <Sidebar.Item>
    //         <div className='flex items-center'>
    //           <FaTools className='mr-2'/>
    //           Services
    //         </div>
    //         </Sidebar.Item>
    //       </Link>
    //       <Link to="/convert"><Sidebar.Item>
    //         <div className='flex items-center'>
    //           <FaExchangeAlt className='mr-2'/>
    //           Convert
    //         </div>
    //         </Sidebar.Item></Link>
    //       {/* <Link to="/swap"><Sidebar.Item>
    //       <div className='flex items-center'>
    //           <FaRandom className='mr-2'/>
    //           Swap
    //         </div>
    //         </Sidebar.Item></Link> */}
    //       <Link to="/management"><Sidebar.Item>
    //         <div className='flex items-center'>
    //             <FaUsers className='mr-2'/>
    //             Management
    //           </div>
    //         </Sidebar.Item></Link>
    //       <Link to="/users"><Sidebar.Item>
    //       <div className='flex items-center'>
    //           <FaUser className='mr-2'/>
    //           Users
    //         </div>
    //         </Sidebar.Item></Link>
    //     </Sidebar.ItemGroup>  
    //   </Sidebar.Items>
    // </Sidebar>
    <CDBSidebar breakpoint={350} textColor="#333" backgroundColor="#ffffff">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt=""
              
            />
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/"><CDBSidebarMenuItem icon='th-large'>Overview</CDBSidebarMenuItem></Link>
          <Link to="/transactions"><CDBSidebarMenuItem icon='sticky-note'>Transactions</CDBSidebarMenuItem></Link>
          <Link to="/transfers"><CDBSidebarMenuItem icon='credit-card'>Transfers</CDBSidebarMenuItem></Link>
          <Link to="/service"><CDBSidebarMenuItem icon='gear'>Services</CDBSidebarMenuItem></Link>
          <Link to="/convert"><CDBSidebarMenuItem icon='convert'>Convert</CDBSidebarMenuItem></Link>
          <Link to="/management"><CDBSidebarMenuItem icon='users'>
              Management
          </CDBSidebarMenuItem></Link>
          <Link to="/users"><CDBSidebarMenuItem icon='user'>
            Users
          </CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
}

export default SidebarComponent