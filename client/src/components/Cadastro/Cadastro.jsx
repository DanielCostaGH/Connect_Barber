import React from "react";

const Cadastro = () => {
  return (
    <section className="w-full h-screen items-center my-16">
      <h1 className="text-white font-bold text-3xl">CRIAR CONTA</h1>
      <form className="" action="">
      <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Nome: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome    |"
          />
        </div>

        <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Senha: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp px-5 w-auto sm:w-inp"
            type="email"
            id="email"
            name="email"
            placeholder="Email   |"
          />
        </div>

        <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Senha: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
            type="number"
            id="tell"
            name="tell"
            placeholder="Telefone   |"
          />
        </div>

        <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Senha: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
            type="text"
            id="senha"
            name="senha"
            placeholder="Senha   |"
          />
        </div>
      </form>
      <div className="w-full">
            <button className="bg-white m-2 rounded-md w-btns h-btns">
              REGISTRAR
              </button>
      </div>

      <a href="/LoginPage" className="text-white p-4">
        Fazer Login
      </a>
    </section>
  );
};

export default Cadastro;
