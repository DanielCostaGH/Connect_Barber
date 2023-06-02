import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ModalAlter = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setUserId(decodedToken.id);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios.post(`http://localhost:3001/ModalAlter/${userId}`, 
    { name, tell, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Dados Alterados");
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Alterar Dados</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="border border-gray-300 p-2 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={tell}
              onChange={(e) => setTell(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
