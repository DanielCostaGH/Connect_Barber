import React from "react";
import "./Navbar.css";
import menu from "../assets/images/menu.svg";


const NavInsider = () => {

  return (
    <nav className="flex items-center justify-center bg-gradient-to-l from-gray-800 to-gray-900 flex-wrap maindiv">
      <div className="lg:flex items-center justify-center hidden md:flex text-xl">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Support
        </a>
        <a
          href="/Schedules"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Agendamentos
        </a>
        <a
          href="/Account"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
        >
          Minha conta
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

export default NavInsider;
