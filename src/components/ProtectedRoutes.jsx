import React, { useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Navigate, useNavigate } from 'react-router-dom'
import NavigationBar from './NavigationBar.jsx'
import Sidebar from './SidebarComponent.jsx'
import apiRequest from '../helpers/HttpRequestHelper.js'

const ProtectedRoutes = ({children}) => {
    let isAuthenticated = localStorage.getItem("isAuthenticated")
    console.log(isAuthenticated);
    const navigate = useNavigate()
    useEffect(() => {
        const checkAuthentication = async () => {
            if (!isAuthenticated) {
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
    }, [isAuthenticated, navigate]);

    return (
        <div className='flex'>
            <Sidebar/>
            <div className='flex flex-grow flex-col md:flex-col sm:flex-col'>
                <NavigationBar/>
                <div className="flex-grow ml-6 mt-6">
                    {children}
                </div>
            </div>
            
    </div>
    )
}

export default ProtectedRoutes