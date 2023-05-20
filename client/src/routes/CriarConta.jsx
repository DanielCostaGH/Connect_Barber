import React from 'react'
import NavLogin from "../components/NavLogin";
import Cadastro from '../components/Cadastro';

const CriarConta = () => {
  return (
    <div className='bg-gradient-to-l from-gray-800 to-gray-900 h-screen'>
      <NavLogin/>
      {/* Formulário de CADASTRO */}
       <Cadastro/>
    </div>
  )
}

export default CriarConta;
