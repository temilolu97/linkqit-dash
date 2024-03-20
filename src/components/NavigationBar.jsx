import { Avatar, Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/logo.png'
import { FiBell } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <Navbar>
        {/* <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand> */}
        {/* <Navbar.Toggle/> */}
        {/* <Navbar.Collapse> */}
        <div className='flex ml-auto gap-3 items-center'>
              <FiBell/>
            <div className='flex gap-'>
                <Avatar rounded/>
              <div className='pt-2'>
                <p className='font-bold'>{user.firstName} {user.lastName}</p>
                <p className='font-light'>Admin</p>
              </div>    
          </div>
         
        </div>
          
        {/* </Navbar.Collapse> */}
    </Navbar>
  )
}

export default NavigationBar