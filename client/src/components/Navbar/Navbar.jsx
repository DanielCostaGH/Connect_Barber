import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_branca from "/images/logo_branca.svg";
import menu from "../../../public/images/menu.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center bg-gradient-to-l from-gray-800 to-gray-900 flex-wrap maindiv">
      <div className="lg:flex items-center justify-center hidden md:flex text-xl">
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
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Contact Professional
        </a>
        <a
          href="/LoginPage"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
        >
          Login
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
