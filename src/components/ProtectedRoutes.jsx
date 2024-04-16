import React, { useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Navigate, useNavigate, useLocation } from 'react-router-dom'
import NavigationBar from './NavigationBar.jsx'
import Sidebar from './SidebarComponent.jsx'
import apiRequest from '../helpers/HttpRequestHelper.js'
import DashboardLayout from '../Layouts/DashboardLayout.jsx'

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation();
    let isAuthenticated = localStorage.getItem("isAuthenticated")
    console.log(isAuthenticated);

    useEffect(() => {
        const checkAuthentication = async () => {
            console.log(isAuthenticated == "false");
            if (isAuthenticated == "false") {
                localStorage.setItem("originalRoute", location.pathname);
                navigate('/login');
            } else {
                try {
                    const token = localStorage.getItem('token');
                    const response = await apiRequest('get', '/profile', null, {
                        Authorization: `Bearer ${token}`,
                    });

                    if (response.status === 401) {
                        throw new Error('Unauthorized');
                    }
                    // else{
                    //     const originalRoute = localStorage.getItem("originalRoute") || '/';
                    //     navigate(originalRoute);
                    // }
                } 
                catch (error) {
                    console.error('Error fetching profile:', error);

                    if (error.response.status == "401") {
                        navigate('/login');
                    }
                }
            }
        };

        checkAuthentication();
    }, [location.pathname, navigate]);

    return (
    //     <div className='flex'>
    //         <Sidebar/>
    //         <div className='flex flex-grow flex-col md:flex-col sm:flex-col'>
    //             <NavigationBar/>
    //             <div className="flex-grow ml-6 mt-6">
    //                 {children}
    //             </div>
    //         </div>
            
    // </div>
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default ProtectedRoutes