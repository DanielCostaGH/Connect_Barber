import React from "react";

const ModalDelete = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Deletar Conta</h2>
        <p className="mb-4">Tem certeza de que deseja excluir sua conta?</p>
        <div className="flex justify-center"> {/* Container flexível */}
          <button
            onClick={onClose}
            className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            // onClick={handleDeleteAccount}
          >
            Apagar conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
