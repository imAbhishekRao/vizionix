import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../image/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 relative z-50"> {/* Added relative z-50 */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Logo} // Use the imported Logo variable here
            className="h-8" // Adjust className as needed
            alt="Logo" // Updated alt text
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/contact" // Update with the correct route or action
            className="text-white bg-black border border-transparent hover:border-purple-600 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-base px-6 py-3"
          >
            Get started
          </Link>
          <button
            type="button"
            onClick={handleMenuToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
              >
               Website Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/marketing"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
              >
               Marketing
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-black bg-white rounded hover:bg-purple-100 hover:text-purple-600 text-base focus:bg-purple-100 focus:text-purple-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
