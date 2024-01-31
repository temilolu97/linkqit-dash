import React from 'react'
import {Sidebar, SidebarLogo} from 'flowbite-react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const SidebarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/overview"><Sidebar.Item>Overview</Sidebar.Item></Link>
          <Link to="/transactions"><Sidebar.Item>Transactions</Sidebar.Item></Link>
          <Link to="/transfers">
            <Sidebar.Item>Transfers</Sidebar.Item>
          </Link>
          <Link to="/service">
            <Sidebar.Item>Service</Sidebar.Item>
          </Link>
          <Link to="/convert"><Sidebar.Item>Convert</Sidebar.Item></Link>
          <Link to="/swap"><Sidebar.Item>Swap</Sidebar.Item></Link>
          <Link to="/management"><Sidebar.Item>Management</Sidebar.Item></Link>
          <Link to="/users"><Sidebar.Item>Users</Sidebar.Item></Link>
        </Sidebar.ItemGroup>  
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SidebarComponent