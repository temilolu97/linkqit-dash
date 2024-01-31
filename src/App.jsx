import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import Sidebar from './components/SidebarComponent'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-6 mt-6">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transfers" element={<Transfers/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/convert" element={<Convert/>}/>
            <Route path="/swap" element={<Swap/>}/>
            <Route path="/management" element={<Management/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/swap/rates' element={<SwapRate/>}/>
            <Route path="/convert/:details" element={<ConversionDetails/>}/>
            <Route path='/services/:details' element={<ServiceDetails/>}/>
            <Route path='/transfers/:id' element={<TransferDetails/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
