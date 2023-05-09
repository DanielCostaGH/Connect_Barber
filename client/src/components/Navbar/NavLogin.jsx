import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_branca from "/images/logo_branca.svg";
import menu from "../../../public/images/menu.svg";

const NavLogin = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-4/12 flex items-center justify-between">
        <div>
        <a href="/"> <img className="h-logo w-logo" src={logo_branca} alt="Logo" /></a>
        </div>

        <div>
          <img
            className="h-menu w-menu mx-10  sm:block md:block lg:hidden"
            src={menu}
            alt="Menu"
          />
        </div>
      </div>
      
      <nav className="navbar lg:inline-flex  text-white pt-6  hidden ">
          <Link className="nav-items" to="/">
            Home
          </Link>
          
          <a href="#contact" className="nav-items">
            Support
          </a>

          <Link  className="nav-items" to="/">
            <a  href="#about" >
              About us
            </a>
          </Link>
        </nav>
    
    </div>

  );
};

export default NavLogin;
