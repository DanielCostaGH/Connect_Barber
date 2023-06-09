import React, { useState } from "react";
import "./Navbar.css";
import menu from "../assets/images/menu.svg";
import closeIcon from "../assets/images/close.svg";
import ModalSupport from "./modals/ModalSupport";

const NavInsider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  // Função para abrir a modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Função para fechar a modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Função para alternar a exibição do menu
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-center bg-gradient-to-l from-gray-800 to-gray-900 flex-wrap maindiv">
        <div className="lg:flex items-center justify-center hidden md:flex text-xl">
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

        {/* Ícone do menu */}
        <div className="sm:hidden">
          <button className="flex items-center text-white" onClick={toggleMenu}>
            {menuOpen ? (
              <img
                className="h-menu w-menu mx-10 sm:block md:block lg:hidden"
                src={closeIcon}
                alt="Close"
              />
            ) : (
              <img
                className="h-menu w-menu mx-10 sm:block md:block lg:hidden"
                src={menu}
                alt="Menu"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Conteúdo do menu expansível */}
      {menuOpen && (
        <div
          className={`bg-gradient-to-l from-gray-800 to-gray-900 text-white text-center`}
        >
          <div
            className={`text-white text-center pb-5 sm:hidden ${
              menuClosing ? "animate-slide-up" : "animate-slide-down"
            }`}
          >
            <a
              className="block lg:inline-block lg:mt-0 text-white hover:text-gray-500 cursor-pointer"
              onClick={openModal} // Adicione o evento onClick para abrir a modal
            >
              Support
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5531980160125&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida."
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Professional
            </a>
            <a
              href="/Schedules"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
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
        </div>
      )}

      <ModalSupport isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default NavInsider;
