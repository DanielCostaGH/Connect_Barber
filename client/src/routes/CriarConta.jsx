import React from 'react'
import NavLogin from "../components/Navbar/NavLogin";
import Cadastro from '../components/Cadastro/Cadastro';

const CriarConta = () => {
  return (
    <div className='bg-gradient-to-br from-gray-600 to-black h-screen'>
      <NavLogin/>
      {/* Formulário de CADASTRO */}
       <Cadastro/>
    </div>
  )
}

export default CriarConta;
