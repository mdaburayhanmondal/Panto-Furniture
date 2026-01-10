import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useCart } from '../context/CartContext';

const navItems = [
  { path: '/', label: 'Furniture' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const mobileMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // cartCount from context
  const { cartCount } = useCart();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in border-b border-white/0 ${
        isScrolled
          ? 'bg-white/10 dark:bg-black/80 dark:text-white backdrop-blur-sm border-white/10 shadow-md text-black'
          : 'bg-transparent text-gray-600 dark:text-gray-200'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* logo */}
        <div>
          <Link
            to={'/'}
            className="font-bold font-poppins text-2xl text-primary"
          >
            Panto
          </Link>
        </div>

        {/* dark/light mode switch - small device */}
        <div
          onClick={toggleTheme}
          className={`md:hidden z-50 focus:outline-0 font-bold text-sm p-2 rounded-full transition-colors duration-300 ease-in bg-black ${
            theme === 'dark'
              ? 'text-black shadow-md shadow-yellow-300'
              : 'shadow-md shadow-blue-300 text-white'
          }`}
        >
          {theme === 'dark' ? (
            <BsSun className="text-yellow-500" />
          ) : (
            <BsMoon className="text-blue-200" />
          )}
        </div>

        {/* mobile menu toggle button */}
        <button
          onClick={mobileMenuHandler}
          className="md:hidden text-2xl cursor-pointer hover:text-primary text-gray-600"
        >
          {!isMenuOpen && <FaBars />}
        </button>

        {/* desktop menu */}
        <div className="hidden md:flex gap-x-10 items-center">
          <ul className="flex flex-col items-center md:flex-row space-y-10 md:space-y-0 md:space-x-8">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  className={({ isActive }) => `
    relative py-2 transition-colors duration-300 group
    ${
      isActive
        ? 'text-primary font-semibold'
        : 'text-gray-400 hover:text-primary'
    }
  `}
                >
                  {({ isActive }) => (
                    <>
                      {navItem.label}
                      {/* Animated Underline Element */}
                      <span
                        className={`
          absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* dark/light mode switch - larger device */}
          <div
            onClick={toggleTheme}
            className={`hidden md:block z-50 focus:outline-0 font-bold text-sm p-2 rounded-full transition-all duration-300 ease-in bg-black cursor-pointer ${
              theme === 'dark'
                ? 'text-black shadow hover:shadow-md shadow-yellow-300 hover:shadow-blue-300'
                : 'shadow hover:shadow-md shadow-blue-300 hover:shadow-yellow-300 text-white'
            }`}
          >
            {theme === 'dark' ? (
              <BsSun className="text-yellow-500" />
            ) : (
              <BsMoon className="text-blue-200" />
            )}
          </div>
        </div>

        {/* cart */}
        <div className="hidden md:block relative text-gray-600 dark:text-white hover:text-primary cursor-pointer">
          <FaShoppingCart className="text-xl" />
          <sup className="absolute -top-3 -right-3 bg-primary text-white size-4 p-1 rounded-full flex items-center justify-center text-xs">
            {cartCount}
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
