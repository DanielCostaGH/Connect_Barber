import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_branca from '/images/logo_branca.svg';

const Navbar = () => {
  return (
    <div className="flex">
      <section className=" w-4/12 relative pt-0 mt-0 ">
        <img className="h-40 w-40" src={logo_branca} alt="Logo" />
      </section>
      <nav className="navbar text-white relative w-6/12 pt-6">
        <Link className="nav-items" to="/">
          Home
        </Link>
        <a href="#about" className="nav-items">
          About us
        </a>
        <button className="nav-items">
          Contact
        </button>
        <Link className="nav-items" to="/LoginProfissional">
          Entrar como Profissional
        </Link>
        <Link className="nav-items" to="/LoginCliente">
          <button>Connect</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
