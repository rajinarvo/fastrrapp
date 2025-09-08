"use client";
import { useState } from "react";
import Link from "next/link";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <FiHome /> },
    { name: "Users", href: "/users", icon: <FiUsers /> },
    { name: "Settings", href: "/settings", icon: <FiSettings /> },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white dark:bg-gray-900 shadow-md transform transition-all duration-300 
        ${collapsed ? "w-20" : "w-64"} 
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          {!collapsed && <h1 className="text-lg font-bold">MyApp</h1>}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse toggle */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t dark:border-gray-700">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded"
          >
            {collapsed ? "Expand" : "Collapse"}
          </button> 
        </div>
      </aside>
    </>
  );
}
