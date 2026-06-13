import React, { useState, useRef, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link to="/">
            <h1 className="text-4xl font-serif font-bold text-amber-700">
              StayLux
            </h1>
          </Link>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="hidden md:flex items-center">
            {user ? (
              <div className="relative" ref={profileRef}>
                {/* Profile Button */}

                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-gray-50 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {user.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div className="text-left">
                    <h4
                      title={user.name}
                      className="font-semibold text-gray-800 max-w-45 truncate"
                    >
                      {user.name}
                    </h4>

                    <p className="text-xs text-gray-500">Member</p>
                  </div>
                </button>

                {/* Dropdown */}

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* User Header */}

                    <div className="p-5 border-b">
                      <h3 className="font-semibold text-lg text-gray-900 truncate">
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Menu */}
                    <Link
                      to="/hotels"
                      onClick={() => setProfileOpen(false)}
                      className="block px-5 py-4 hover:bg-gray-50 transition"
                    >
                      🏨 Hotels
                    </Link>

                    <Link
                      to="/wishlist"
                      onClick={() => setProfileOpen(false)}
                      className="block px-5 py-4 hover:bg-gray-50 transition"
                    >
                      ❤️ Wishlist
                    </Link>

                    <Link
                      to="/my-bookings"
                      onClick={() => setProfileOpen(false)}
                      className="block px-5 py-4 hover:bg-gray-50 transition"
                    >
                      📖 My Bookings
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-4 text-red-500 hover:bg-red-50 transition"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="font-medium text-gray-700 hover:text-amber-700 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t py-5 bg-white">
            <div className="mt-6">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                      {user.name?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <h4 className="font-semibold">{user.name}</h4>

                      <p className="text-xs text-gray-500">Member</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <NavLink
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className="block font-medium text-gray-700"
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/my-bookings"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center border py-3 rounded-xl hover:bg-gray-50"
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 rounded-xl bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block text-center border py-3 rounded-xl"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="block text-center bg-amber-600 text-white py-3 rounded-xl"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
