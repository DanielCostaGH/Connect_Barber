import React, { useState } from "react";
import NavInsider from "../components/NavInsider";
import { useNavigate } from "react-router-dom";
import alterar_icon from "../assets/images/alterar_icon.svg";
import deletar_icon from "../assets/images/deletar_icon.svg";
import Footer from "../components/Footer";
import logout_icon from "../assets/images/logout_icon.svg";
import ModalAlter from "../components/modals/ModalAlter";
import ModalDelete from "../components/modals/ModalDelete";

const Account = () => {
  // Código para apagar o token do localStorage e usar a função navigate para redirecionar à pagina inicial.
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // =======================================================================

  //Código para modal de Alterar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // =======================================================================

  //Código para modal de Deletar Conta
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  // const handleDeleteAccount = () => {
  //   // Lógica para deletar a conta
  // };
  
  // ========================================================================

  return (
    // Div "body"
    <div className="bg-gradient-to-l from-gray-800 to-gray-500 min-h-screen flex flex-col">

      {/* Navbar */}
      <NavInsider />

      {/* Titulo */}
      <h1 className="text-white text-3xl lg:pt-24 pt-14 text-center">Seja Bem-vindo!</h1>

      {/* Div main */}
      <div className="flex flex-col items-center md:flex-row flex-grow text-center">

        {/* Div Alterar */}
        <div
          id="div1"
          className="w-full mt-10
        md:mt-0 md:border-r-2 md:border-white md:pr-5
          "
        >
          <button onClick={openModal}>
            <img
              className="lg:h-52 md:h-52 h-40"
              src={alterar_icon}
              alt="alterar"
            />
            <h1 className="text-white text-2xl pt-3">Alterar Dados</h1>
          </button>
        </div>
        <ModalAlter 
        isOpen={isModalOpen} 
        onClose={closeModal} />


        {/* Div Deletar Conta */}
        <div id="div2" className="w-full my-10">
          <button onClick={openDeleteModal}>
            <img
              className="lg:h-52 md:h-52 h-40"
              src={deletar_icon}
              alt="deletar"
            />
            <h1 className="text-white text-2xl pt-3">Deletar Conta</h1>
          </button>
        </div>
        <ModalDelete
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          // handleDeleteAccount={handleDeleteAccount}
        />


      </div>

      {/* Div secundária */}
      <div className="w-full flex justify-center items-center py-5">
        <button
          id="logout"
          className="p-3 text-white text-xl flex justify-center items-center  bg-[#FF3333] w-32 rounded-lg"
          onClick={handleLogout}
        >
          SAIR
          <img className="w-10 h-10" src={logout_icon} alt="Sair" />
        </button>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
};

export default Account;
