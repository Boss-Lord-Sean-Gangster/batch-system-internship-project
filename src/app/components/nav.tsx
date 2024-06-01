import React from "react";
import { useState } from "react";

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Nav: React.FC<NavProps> = ({ darkMode, toggleDarkMode }) => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("invisible");
    }
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("invisible");
    }
  };

  return (
    <nav className="flex justify-between w-full items-center gap-5" >
      <ul className={`sidebar invisible fixed top-0 right-0 h-screen w-full shadow-lg flex flex-col gap-10 items-start justify-start p-5 z-10 sm:w-60 md:w-60 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${darkMode ? "text-white" : "text-black"}`}
          onClick={hideSidebar}
          cursor={"pointer"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="flex gap-2">
          <img src="./Images/Logo.png" alt="Logo" />
          <h2 className="text-3xl">Ureka</h2>
        </div>
        <li className="w-full">
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 m-5 w-full ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Home
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 m-5 w-full ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            About Us
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 m-5 w-full ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Pricing
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 m-5 w-full ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Features
          </a>
        </li>
      </ul>
      <ul className="hidden md:flex gap-5 items-baseline">
        <img src="./Images/Logo.png" alt="Logo" />
        <h2 className="text-3xl">Ureka</h2>
        <li>
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`focus:text-customRed hover:bg-customRed hover:text-white rounded transition duration-300 px-2 py-1 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Features
          </a>
        </li>
        <li onClick={showSidebar} className="cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </li>
      </ul>
      <div className="flex items-center md:hidden">
        <button
          onClick={showSidebar}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <button className="bg-black hover:bg-customRed text-white py-2 px-4 rounded transition duration-300 mr-10">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Nav;
