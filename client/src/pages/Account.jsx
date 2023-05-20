import React from 'react'
import NavInsider from '../components/NavInsider'
import { useNavigate } from "react-router-dom";
import logout_icon from "../assets/images/logout_icon.svg";


const Account = () => {
  

  const NavInsider = () => {


    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/");
    };


  return (

    <div className='bg-gradient-to-l from-gray-800 to-gray-900 h-screen'>

      <NavInsider/>

      <h1 className='text-white text-4xl'>MINHA CONTA</h1>

      <div>
      <button id="logout" onClick={handleLogout}>
          <img className="w-10 h-10" src={logout_icon} alt="Sair" />
        </button>
      </div>
    </div>
  )
}

export default Account
