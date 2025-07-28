import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-md w-full fixed top-0 left-0 z-50">
      {/* Navbar container */}
      <div className="w-full flex flex-wrap items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-white hover:text-amber-500 cursor-pointer">
          &lt;TableReserve&gt;
        </div>

        {/* Search bar (Always visible) */}
        <div className="w-full mt-3 md:mt-0 md:w-1/2 md:mx-6 order-3 md:order-none">
          <input
            type="text"
            placeholder="Search Booking..."
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden cursor-pointer order-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300 font-medium">
          <li className="hover:text-amber-500 cursor-pointer">Home</li>
          <li className="hover:text-amber-500 cursor-pointer">Reservations</li>
          <li className="hover:text-amber-500 cursor-pointer">About</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">Reservations</li>
            <li className="hover:text-amber-500 cursor-pointer">About</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
