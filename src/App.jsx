import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import Sidebar from './components/SidebarComponent'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Transfers from './pages/Transfers'
import Convert from './pages/Convert'
import Swap from './pages/Swap'
import Management from './pages/Management'
import Users from './pages/Users'
import Service from './pages/Service'
import SwapRate from './pages/SwapRate'
import ConversionDetails from './pages/ConversionDetails'
import ServiceDetails from './pages/ServiceDetails'
import TransferDetails from './pages/TransferDetails'
import Login from './pages/Login'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={
                <ProtectedRoutes>
                  <Overview />
                </ProtectedRoutes>
              } />
            <Route path="/overview" element={
              <ProtectedRoutes>
                  <Overview />
              </ProtectedRoutes>
            } />
            <Route path="/transactions" element={
            <ProtectedRoutes>
              <Transactions />
            </ProtectedRoutes>} />
            <Route path="/transfers" element={
              <ProtectedRoutes>
                  <Transfers />
              </ProtectedRoutes>}/>
            <Route path="/service" element={
              <ProtectedRoutes>
              <Service />
            </ProtectedRoutes>
            }/>
            <Route path="/convert" element={
              <ProtectedRoutes>
              <Convert />
            </ProtectedRoutes>
            }/>
            <Route path="/swap" element={
              <ProtectedRoutes>
              <Swap />
            </ProtectedRoutes>
            }/>
            <Route path="/management" element={
              <ProtectedRoutes>
              <Management />
            </ProtectedRoutes>
            }/>
            <Route path='/users' element={
              <ProtectedRoutes>
              <Users />
            </ProtectedRoutes>
            }/>
            <Route path='/swap/rates' element={
              <ProtectedRoutes>
              <SwapRate />
            </ProtectedRoutes>
            }/>
            <Route path="/convert/:details" element={<ProtectedRoutes>
                  <ConversionDetails />
                </ProtectedRoutes>}/>
            <Route path='/services/:details' element={
              <ProtectedRoutes>
              <ServiceDetails />
            </ProtectedRoutes>
            }/>
            <Route path='/transfers/:id' element={
              <ProtectedRoutes>
              <TransferDetails />
            </ProtectedRoutes>
            }/>
          </Routes>
    </AuthProvider>
  )
}

export default App
