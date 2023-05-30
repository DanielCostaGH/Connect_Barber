import React, { useEffect, useState } from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";

const ModalDelete = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    const decodedToken = jwt_decode(token);
    setUserId(decodedToken.id);
  }, []);

  const handleDeleteAccount = () => {
    const token = localStorage.getItem("token");
    Axios.delete(`http://localhost:3001/ModalDelete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Deletar Conta</h2>
        <p className="mb-4">Tem certeza de que deseja excluir sua conta?</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Apagar conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;