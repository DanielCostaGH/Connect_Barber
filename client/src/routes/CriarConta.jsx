import React from "react";
import NavLogin from "../components/NavLogin";
import Cadastro from "../components/Cadastro";
import Footer from "../components/Footer";

const CriarConta = () => {
  return (
    <div className="bg-gradient-to-l from-gray-800 to-gray-900 h-screen">
      {/* Component Navbar de login */}
      <NavLogin />

      {/* Formulário de CADASTRO */}
      <Cadastro />

      {/* Component Footer */}
      <Footer />
    </div>
  );
};

export default CriarConta;
