import React from "react";

const Header = () => {
  return (
    <div>
      <header className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 text-white">
        <div className="text-xl font-bold">stripe</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#">Products</a>
          <a href="#">Developers</a>
          <a href="#">Company</a>
          <a href="#">Pricing</a>
        </nav>
        <button className="text-sm bg-white text-gray-900 rounded-full px-4 py-1 font-semibold">
          Sign in →
        </button>
      </header>
    </div>
  );
};

export default Header;
