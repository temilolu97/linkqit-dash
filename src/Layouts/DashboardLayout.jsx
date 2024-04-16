import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SidebarComponent from '../components/SidebarComponent'
const DashboardLayout = ({children}) => {
  return (
    <>
        <div className='flex mx-4'>
            <SidebarComponent/>
            <div className="flex-grow ml-6 mt-6">
              <NavigationBar/>
                <div className='mb-4'>
                  {children}
                </div>
            </div>
        </div>
        
    </>
  )
}

export default DashboardLayout