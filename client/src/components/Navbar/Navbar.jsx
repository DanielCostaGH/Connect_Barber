import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_branca from "/images/logo_branca.svg";
import menu from "../../../public/images/menu.svg";

const Navbar = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-4/12 flex items-center justify-between">
        <img className="h-logo w-logo" src={logo_branca} alt="Logo" />
        <img
          className="h-menu w-menu mx-10  sm:block md:block lg:hidden"
          src={menu}
          alt="Menu"
        />

      </div>

      <nav className="navbar lg:inline-flex text-white relative w-6/12 pt-6  hidden ">
          <Link className="nav-items" to="/">
            Home
          </Link>
          <a href="#about" className="nav-items">
            About us
          </a>
          <a href="#contact" className="nav-items">
            Support
          </a>
          <Link className="nav-items" to="/">
            Contact Professional
          </Link>
          <Link className="nav-items" to="/LoginPage">
            <button>Connect</button>
          </Link>
        </nav>
    </div>
  );
};

export default Navbar;
