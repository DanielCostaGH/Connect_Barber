import React from "react";

const Login = () => {
  return (
    <section className="w-full h-screen items-center my-24">
      <h1 className="text-white font-bold text-3xl mx-auto">LOGIN</h1>
      <form className="" action="">
        <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Nome: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
            type="text"
            id="email"
            name="email"
            placeholder="Email    |"
          />
        </div>

        <div className="m-5 mx-auto">
          {/* <label className="text-white mr-2" htmlFor="nome">
                Senha: {""}
              </label> */}
          <input
            className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
            type="text"
            id="nome"
            name="nome"
            placeholder="Senha   |"
          />
        </div>
        <div>
          <div className="w-full">
            <button className="bg-white m-2 rounded-md w-btns h-btns">
              <h1>ENTRAR</h1>
            </button>
          </div>

          <a href="/CriarConta" className="text-white p-4">
            Criar Conta
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;
