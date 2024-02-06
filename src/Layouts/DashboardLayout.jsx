import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SidebarComponent from '../components/SidebarComponent'
const DashboardLayout = ({children}) => {
  return (
    <>
        <NavigationBar/>
        <div className='flex'>
            <SidebarComponent/>
            <div className="flex-grow ml-6 mt-6">
                {children}
            </div>
        </div>
        
    </>
  )
}

export default DashboardLayout