import React from "react";
import Navbar from "../components/Navbar/Navbar";

const LoginCliente = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 to-black h-screen">
      <Navbar />
      <div className="flex">
        {/* Formulário de CADASTRO */}
        <section className="w-1/2 h-screen">
          <h1 className="text-white font-bold text-3xl">CADASTRO</h1>
          <form className="" action="">
            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Nome |{" "}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>

            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Telefone |{" "}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>
            
            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Email |{" "}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>

            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Senha |{" "}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>
          </form>

          <button className="bg-white py-3 px-5 rounded-md">
              FINALIZAR
            </button>
        </section>

        {/* Formulário de LOGIN */}
        <section className="w-1/2 h-screen">
          <h1 className="text-white font-bold text-3xl mx-auto">LOGIN</h1>
          <form className="" action="">
            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Nome |{" "}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>

            <div className="m-5">
              <label className="text-white" htmlFor="nome">
                Nome |{""}
              </label>
              <input type="text" id="nome" name="nome" />
            </div>

            <button className="bg-white py-3 px-5 rounded-md">
              ENTRAR
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginCliente;
