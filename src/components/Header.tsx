import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleDarkMode } from '../redux/toggleSclice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { mode } = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    dispatch(ToggleDarkMode());
    document.documentElement.classList.toggle('dark', !mode); // Add/remove the 'dark' class
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-chatter-start dark:text-chatter-text-dark shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-0 text-2xl dark:text-white">
        Chatter
        <span className="text-2xl font-bold dark:text-purple-400 text-blue-400">
          Sphere
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a
          href="Room"
          className="text-gray-700 dark:text-gray-300 dark:hover:text-purple-400 hover:text-blue-400 transition-all"
        >
          Room
        </a>
        <a
          href="#docs"
          className="text-gray-700 dark:text-gray-300 dark:hover:text-purple-400 hover:text-blue-400 transition-all"
        >
          Features
        </a>
        <a
          href="#community"
          className="text-gray-700 dark:text-gray-300 dark:hover:text-purple-400 hover:text-blue-400 transition-all"
        >
          Contact Us
        </a>
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 w-48 md:hidden`}
      >
        <a
          href="Room"
          className="block text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-purple-400 transition-all"
        >
          Room
        </a>
        <a
          href="Features"
          className="block text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-purple-400 transition-all"
        >
          Features
        </a>
        <a
          href="ContactUs"
          className="block text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-purple-400 transition-all"
        >
          Contact Us
        </a>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
      >
        {mode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
