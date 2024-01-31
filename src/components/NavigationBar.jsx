import { Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/logo.png'
import { FiBell } from 'react-icons/fi';

const NavigationBar = () => {
  return (
    <Navbar>
        <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-28">Welcome, Clement</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <div className='bg-gray-200 rounded-full p-2'>
            <FiBell/>
          </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar