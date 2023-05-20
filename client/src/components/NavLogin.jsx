import React from "react";
import "./Navbar.css";
import logo_branca from "../assets/images/logo_branca.svg";
import menu from "../assets/images/menu.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center bg-gradient-to-l from-gray-800 to-gray-900 flex-wrap maindiv">
      <div className="w-3/6">
        <a href="/">
          <img className="h-logo w-logo" src={logo_branca} alt="Logo" />
        </a>
      </div>
      <div className="lg:flex items-center w-3/6 justify-between hidden md:flex text-xl">
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Home
        </a>
        <a
          href="#about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          About us
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Support
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10 pr-20"
        >
          Contact Professional
        </a>
        
      </div>

      {/* icone do menu */}
      <div className="sm:hidden ">
        <button className="flex items-center text-white">
          <img
            className="h-menu w-menu mx-10  sm:block md:block lg:hidden"
            src={menu}
            alt="Menu"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
