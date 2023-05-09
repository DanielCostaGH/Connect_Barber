import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_branca from "/images/logo_branca.svg";
import menu from "../../../public/images/menu.svg";
import logout_icon from "../../../public/images/logout_icon.svg";

const NavInsider = () => {
  return (
    <div className="lg:flex w-full">
      <div className="flex items-center justify-between">
        <div>
        <a href="/"> <img className="h-logo w-logo" src={logo_branca} alt="Logo" /></a>
        </div>
        
        {/* <img
          className="h-menu w-menu mx-10  sm:block md:block lg:hidden"
          src={menu}
          alt="Menu"
        /> */}

        <nav className="lg:inline-flex hidden text-white pt-6   ">
          <Link className="nav-items" to="/">
            Home
          </Link>

          <a href="#contact" className="nav-items">
            Support
          </a>

          <a href="#about" className="nav-items">
            About us
          </a>

          <Link className="nav-items" to="/Schedules">
            Meus Agendamentos
          </Link>

          <Link className="nav-items" to="/Account">
            Minha Conta
          </Link>

          <button>
            <img src={logout_icon} alt="Sair" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavInsider;
