import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center"> 
          <span className="text-xl font-semibold">My Ecommerce</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded-md mr-2 hidden md:block"
          />
          <a href="/cart" className="text-white hover:text-gray-300"></a>
          <a href="/login" className="text-white hover:text-gray-300">
            Login
          </a>
          <a href="/signup" className="text-white hover:text-gray-300">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
