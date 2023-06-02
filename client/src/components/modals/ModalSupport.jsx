import React from "react";

const ModalSupport = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Não renderizar a modal se não estiver aberta
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    // ...

    onClose(); // Fechar a modal após enviar o formulário
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleFormSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Support</h3>
                  <div className="mt-2">
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Assunto:
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="shadow-md border-2 border-gray-400 rounded-md h-inp w-auto sm:w-inp px-5"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Descrição:
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          name="description"
                          rows="4"
                          className="shadow-md border-2 border-gray-400 rounded-md h-auto w-auto sm:w-inp px-5"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Enviar
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-[#ff5151] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalSupport;
