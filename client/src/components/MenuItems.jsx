import React from 'react'
import { menuItemsData } from '../assets/assets' // Array of menu items with label, route, and icon
import { NavLink } from 'react-router-dom'       // NavLink for route-aware navigation

// MenuItems component receives setSidebarOpen to close sidebar on menu click
const MenuItems = ({ setSidebarOpen }) =>
{
    return (
        <div className='px-6 text-gray-600 space-y-1 font-medium'>
            {
                // Loop through menuItemsData to render each menu link
                menuItemsData.map(({ to, label, Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'} // ensures exact matching for the root route
                        onClick={() => setSidebarOpen(false)} // close sidebar on click
                        className={({ isActive }) => `
                            px-3.5 py-2 flex items-center gap-3 rounded-xl 
                            ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}
                        `}
                    >
                        {/* Icon for the menu item */}
                        <Icon className="w-5 h-5" />

                        {/* Label for the menu item */}
                        {label}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default MenuItems
