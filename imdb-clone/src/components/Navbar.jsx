// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom"; // Add this import

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 text-black font-bold px-2 py-1 text-xl rounded">
            IMDb
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1">
              <FaBars />
              <span className="text-sm ml-1">Menu</span>
            </button>
            <div className="flex items-center">
              <select className="text-white text-sm h-8 rounded-l px-2 bg-black border border-gray-600">
                <option>All</option>
                <option>Titles</option>
                <option>TV Episodes</option>
              </select>
              <input
                type="text"
                placeholder="Search IMDb"
                className="w-[200px] md:w-[400px] px-2 py-1 text-black h-8 bg-white"
              />
              <button className="bg-gray-300 text-black h-8 px-2 rounded-r">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          
          <Link to="/watchlist" className="flex items-center space-x-1">
            <FaPlus />
            <span>Watchlist</span>
          </Link>
          <Link to="/signin" className="flex items-center">
            Sign in
          </Link>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-black border border-white"
          >
            <option>EN</option>
            <option>ES</option>
          </select>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <button className="flex items-center space-x-1 w-full">
            <FaBars />
            <span className="text-sm ml-1">Menu</span>
          </button>
          <div className="flex items-center mt-2">
            <select className="text-white text-sm h-8 rounded-l px-2 bg-black border border-gray-600">
              <option>All</option>
              <option>Titles</option>
              <option>TV Episodes</option>
            </select>
            <input
              type="text"
              placeholder="Search IMDb"
              className="w-[120px] px-2 py-1 text-black h-8 bg-white"
            />
            <button className="bg-gray-300 text-black h-8 px-2 rounded-r">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col space-y-2 text-sm mt-2">
            
            <Link to="/watchlist" className="flex items-center space-x-1">
              <FaPlus />
              <span>Watchlist</span>
            </Link>
            <Link to="/signin" className="flex items-center">
              Sign in
            </Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-black border border-white"
            >
              <option>EN</option>
              <option>ES</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
