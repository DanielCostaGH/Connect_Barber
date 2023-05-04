import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Cadastro from '../components/Cadastro/Cadastro';

const CriarConta = () => {
  return (
    <div className='bg-gradient-to-br from-gray-600 to-black h-screen'>
      <Navbar/>
      {/* Formulário de CADASTRO */}
       <Cadastro/>
    </div>
  )
}

export default CriarConta;
