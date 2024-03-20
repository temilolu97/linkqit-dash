import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SidebarComponent from '../components/SidebarComponent'
const DashboardLayout = ({children}) => {
  return (
    <>
        <div className=''>
            <SidebarComponent/>
            <div className=" ml-6 mt-6">
              <NavigationBar/>

                {children}
            </div>
        </div>
        
    </>
  )
}

export default DashboardLayout