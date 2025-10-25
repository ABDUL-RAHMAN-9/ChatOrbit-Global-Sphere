import React from "react";
import { menuItemsData } from "../assets/assets"; // Array of menu items with label, route, and icon
import { NavLink } from "react-router-dom";       // NavLink for route-aware navigation

// MenuItems component receives setSidebarOpen to close sidebar on menu click
const MenuItems = ({ setSidebarOpen }) =>
{
    // Function to close sidebar only on small screens (mobile)
    const handleMenuClick = () =>
    {
        if (window.innerWidth < 640)
        {
            setSidebarOpen(false); // only close on small devices
        }
    };

    return (
        <div className="px-6 text-gray-600 space-y-1 font-medium">
            {menuItemsData.map(({ to, label, Icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={to === "/"} // exact match for root route
                    onClick={handleMenuClick}
                    className={({ isActive }) =>
                        `px-3.5 py-2 flex items-center gap-3 rounded-xl transition-all duration-200
            ${isActive
                            ? "bg-indigo-50 text-indigo-700 font-medium"
                            : "hover:bg-gray-100"
                        }`
                    }
                >
                    {/* Icon for the menu item */}
                    <Icon className="w-5 h-5" />

                    {/* Label for the menu item */}
                    {label}
                </NavLink>
            ))}
        </div>
    );
};

export default MenuItems;
