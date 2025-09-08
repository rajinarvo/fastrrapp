"use client";
import { useState } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";

export default function Topbar({ setMobileOpen }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 shadow-md sticky top-0 z-30">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu />
      </button>

      <div className="flex items-center space-x-4 ml-auto relative">
        {/* User Dropdown */}
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block">John Doe</span>
          <FiChevronDown />
        </button>

        {openDropdown && (
          <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border rounded-md shadow-lg w-40">
            <a
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Profile
            </a>
            <button
              onClick={() => alert("Sign out clicked")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
