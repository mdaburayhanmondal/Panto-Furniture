import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const navItems = [
  { path: '/', label: 'Furniture' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in border-b border-white/0 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-sm border-white/10 shadow-md text-black'
          : 'bg-transparent text-white'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* logo */}
        <div>
          <Link
            to={'/'}
            className="font-bold font-poppins text-2xl text-gray-600"
          >
            Panto
          </Link>
        </div>

        {/* mobile menu toggle button */}
        <button
          onClick={mobileMenuHandler}
          className="md:hidden text-2xl cursor-pointer hover:text-primary text-gray-600"
        >
          {!isMenuOpen && <FaBars />}
        </button>

        {/* desktop menu */}
        <div className="hidden md:flex">
          <ul className="flex flex-col items-center md:flex-row space-y-10 md:space-y-0 md:space-x-8">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary font-bold'
                      : 'font-normal hover:text-primary hover:font-bold'
                  }
                >
                  {navItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* cart */}
        <div className="hidden md:block relative text-white hover:text-primary cursor-pointer">
          <FaShoppingCart className="text-xl" />
          <sup className="absolute -top-3 -right-3 bg-primary text-white size-4 p-1 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>

      {/* --- mobile menu --- */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm shadow-lg z-50 md:hidden flex flex-col items-center justify-center gap-y-10"
        >
          <button
            className="absolute top-5 right-5 text-3xl text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose />
          </button>

          <ul
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center space-y-10"
          >
            {navItems.map((navItem, index) => (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary font-bold text-xl'
                      : 'text-white font-normal text-xl hover:text-primary'
                  }
                >
                  {navItem.label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="relative text-white hover:text-primary"
              >
                <FaShoppingCart className="text-2xl" />
                <sup className="absolute -top-3 -right-3 bg-primary text-white size-5 rounded-full flex items-center justify-center text-xs">
                  0
                </sup>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
