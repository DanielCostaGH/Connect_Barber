import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='nav-items' to="/">Home</Link>
        <Link className='nav-items' to="/About">About us</Link>
        <Link className='nav-items' to="/Contact">Contact</Link>
        <Link className='nav-items' to="/LoginProfissional">Entrar como Profissional</Link>
        <Link className='nav-items' to="/LoginCliente"><button>Connect</button></Link>
    </nav>
  )
}

export default Navbar
