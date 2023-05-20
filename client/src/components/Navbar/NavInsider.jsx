import React from "react";
import "./Navbar.css";
import logo_branca from "/images/logo_branca.svg";
import menu from "../../../public/images/menu.svg";
import logout_icon from "../../../public/images/logout_icon.svg";
import { useNavigate } from "react-router-dom";


const NavInsider = () => {


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  


  return (
    <nav className="flex items-center justify-between bg-gradient-to-l from-gray-800 to-gray-900 flex-wrap maindiv">
      
      <div className="lg:w-1/6 ">
        <a href="/">
          <img className="h-logo w-logo" src={logo_branca} alt="Logo" />
        </a>
      </div>


      <div className="w-3/6 lg:flex items-center  hidden md:flex text-xl">
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Home
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Support
        </a>
        <a
          href="#about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          About us
        </a>
        
        <a
          href="/Schedules"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Meus Agendamentos
        </a>
        <a
          href="/Account"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
        >
          Minha Conta
        </a>
      </div>

      <div className="hidden lg:block">
      <button id="logout" onClick={handleLogout}>
          <img className="w-10 h-10" src={logout_icon} alt="Sair" />
        </button>
      </div>


      {/* icone do menu */}
      <div className="block lg:hidden">
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
