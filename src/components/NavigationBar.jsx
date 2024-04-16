import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/logo.png'
import { FiBell } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  // if(!user) user = {
  //   firstName: "Super",
  //   lastName:"Admin",
  //   emailAddress:"admin@linqit.com"
  // }
  let navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    localStorage.setItem("isAuthenticated", false)
    navigate("/login")
  }
  return (
    <Navbar>
        {/* <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand> */}
        {/* <Navbar.Toggle/> */}
        {/* <Navbar.Collapse> */}
        <div className='flex ml-auto gap-3 items-center'>
              <FiBell/>
            <div className='flex gap-2 items-center'>
              <Avatar rounded/>
              <Dropdown label={
                <div className='pt-2'>
                  <p className='font-bold'>{user.firstName} {user.lastName}</p>
                  <p className='font-light'>Admin</p>
                </div> } arrowIcon={false} inline>
                <Dropdown.Header>
                  <span className="block text-sm">{user.firstName} {user.lastName}</span>
                  <span className="block truncate text-sm font-medium">{user.emailAddress}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>
              
            </div>
         
        </div>
          
        {/* </Navbar.Collapse> */}
    </Navbar>
  )
}

export default NavigationBar