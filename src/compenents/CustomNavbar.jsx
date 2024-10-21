import React from 'react';
import { Navbar } from 'flowbite-react';


export const CustomNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true} className="bg-secondary shadow-md dark:bg-blue-900 fixed top-0 left-0 right-0 z-50 p-6">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl md:text-[24px] font-semibold text-white p-2">
          Yazid Aqsa R.
        </span>
      </Navbar.Brand>
      <div className="flex items-center justify-center flex-grow space-x-8">
        <ul className="flex space-x-8 list-none p-0 m-0">
          <li>
            <a href="/home" className="text-lg font-medium text-gray-700 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/vacancy" className="text-lg font-medium text-gray-700 text-white">
              Portofolio
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
}
export default CustomNavbar;