import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 text-white">
        <div className="text-xl font-bold">stripe</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            Developers
          </NavLink>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            Pricing
          </NavLink>
        </nav>
        <button className="text-sm bg-white text-gray-900 rounded-full px-4 py-1 font-semibold">
          Sign in →
        </button>
      </header>
    </div>
  );
};

export default Header;
