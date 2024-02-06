import { Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/logo.png'
import { FiBell } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <Navbar>
        <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-28">Welcome, {user.firstName} {user.lastName}</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <div className='bg-gray-200 rounded-full p-4'>
            <FiBell/>
          </div>
          <div className='flex'>
            <div className='bg-gray-200 rounded-full p-4 mr-2'>
              <FaUser />  
            </div>
            <div className='pt-2'>
              <p className='font-bold'>{user.firstName} {user.lastName}</p>
              <p className='font-light'>Admin</p>
            </div>    
          </div>
         
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar