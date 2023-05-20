import React from "react";

const ModalAlter = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Alterar Dados</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="block mb-2">
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Alterar
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-blue-500 hover:text-blue-600 font-bold"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalAlter;
