import React from 'react'
import {Sidebar, SidebarLogo} from 'flowbite-react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaChartBar, FaExchangeAlt, FaMoneyBill, FaMoneyCheck, FaRandom, FaTools, FaUser, FaUsers } from 'react-icons/fa'
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,CDBIcon } from 'cdbreact'
import overviewIcon from '../assets/home.png'
import receipt from '../assets/receipt.png'
import receiptItem from '../assets/receipt-item.png'
import send from '../assets/send.png'
import convertIcon from '../assets/refresh-2.png'
import managementIcon from '../assets/people.png'
import userIcon from '../assets/profile.png'
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
          <Link to="/"><CDBSidebarMenuItem >
            <div className='flex gap-1'>
              <img src={overviewIcon} alt="Overview" />Overview
            </div>
          </CDBSidebarMenuItem></Link>
          <Link to="/transactions">
            <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={receiptItem} alt="Transactions" />Transactions
              </div>
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/transfers">
            <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={send} alt="Transfers" />Transfers
              </div>
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/service">
          <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={receipt} alt="Services" />Services
              </div>
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/convert">
            <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={convertIcon} alt="Convert" />Convert
              </div>
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/management">
            <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={managementIcon} alt="Manageent" />Management
              </div>
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/users">
            <CDBSidebarMenuItem>
              <div className='flex gap-1'>
                <img src={userIcon} alt="Users" />Customers
              </div>
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
}

export default SidebarComponent