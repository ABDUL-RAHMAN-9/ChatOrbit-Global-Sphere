import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'        // Sidebar component
import { Outlet } from 'react-router-dom'         // Outlet for nested routes
import { Menu, X } from 'lucide-react';           // Icons for mobile menu toggle
import { dummyUserData } from '../assets/assets'  // Temporary dummy user data
import Loading from '../components/Loading';      // Loading component while user data is unavailable

// Layout component: main wrapper for authenticated app pages
const Layout = () =>
{
  const user = dummyUserData;                      // Simulated logged-in user
  const [SidebarOpen, setSidebarOpen] = useState(0); // State to control sidebar visibility

  return user ? (
    <div className='w-full flex h-screen'>

      {/* Sidebar with toggle control */}
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area for nested routes */}
      <div className='flex-1 bg-slate-50'>
        <Outlet /> {/* Render nested route components here */}
      </div>

      {/* Mobile toggle button: X to close, Menu to open */}
      {
        SidebarOpen ?
          <X
            className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
            onClick={() => setSidebarOpen(false)} // Close sidebar on click
          />
          :
          <Menu
            className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
            onClick={() => setSidebarOpen(true)} // Open sidebar on click
          />
      }
    </div>
  ) :
    (
      <Loading /> // Show loading if user data is not available
    )
}

export default Layout
