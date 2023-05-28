import React, { useState } from "react";
import "./Navbar.css";
import menu from "../assets/images/menu.svg";
import ModalSupport from "./modals/ModalSupport";


const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Função para abrir a modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Função para fechar a modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10 cursor-pointer"
            onClick={openModal} // Adicione o evento onClick para abrir a modal
          >
            Support
          </a>
        <a
          href="https://api.whatsapp.com/send?phone=5531980160125&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida."
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-10"
          target="_blank" 
          rel="noopener noreferrer"
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
    <ModalSupport isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
