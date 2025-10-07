import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="Car Rental Logo"
          className="h-10 w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors [&.active]:text-blue-600"
        >
          Home
        </Link>
        <Link
          to="/cars"
          className="hover:text-blue-600 transition-colors [&.active]:text-blue-600"
        >
          Cars
        </Link>
        <Link
          to="/dashboard"
          className="hover:text-blue-600 transition-colors [&.active]:text-blue-600"
        >
          My Bookings
        </Link>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <input
            type="text"
            placeholder="Search cars"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </div>

        <Link
          to="/dashboard"
          className="hover:text-blue-600 transition-colors [&.active]:text-blue-600"
        >
          List Cars
        </Link>

        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700"
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 overflow-hidden lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 py-5 px-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/cars" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-medium">
            Cars
          </Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-medium">
            My Bookings
          </Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-medium">
            List Cars
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition w-fit"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
