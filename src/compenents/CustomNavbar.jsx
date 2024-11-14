import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';

export const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-secondary shadow-md dark:bg-blue-900 fixed top-0 left-0 right-0 z-50 p-6"
    >
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl md:text-[24px] font-semibold text-white p-2">
          Yazid Aqsa R.
        </span>
      </Navbar.Brand>
      <button
        onClick={toggleDropdown}
        className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
      >
        <svg
          className="fill-current h-5 w-5"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:justify-center flex-grow transition-all duration-200 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 list-none p-0 m-0 text-right md:text-left md:items-center md:text-base text-sm space-y-4 md:space-y-0">
          <li>
            <a href="/home" className="text-lg font-medium text-gray-700 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/vacancy" className="text-lg font-medium text-gray-700 text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg font-medium text-gray-700 text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg font-medium text-gray-700 text-white">
              Certificates
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg font-medium text-gray-700 text-white">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
