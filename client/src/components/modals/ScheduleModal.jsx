import React, { useState, useEffect, useRef } from "react";
import ServiceSelector from "../services/ServiceSelector";
import DaySelector from "../services/DaySelector";
import TimeSelector from "../services/TimeSelector";

const SchedulesModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSchedule = () => {
    // Lógica para enviar a requisição de agendamento
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    handleNextStep();
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    handleNextStep();
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    handleNextStep();
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <ServiceSelector onSelect={handleServiceSelect} />;
      case 2:
        return <DaySelector onSelect={handleDaySelect} />;
      case 3:
        return <TimeSelector onSelect={handleTimeSelect} />;
      case 4:
        return (
          <div className="text-left font-oswald text-lg">
            
            <p><span className="font-bold">Serviço:</span> {selectedService}</p>
            <p><span className="font-bold">Dia:</span> {selectedDay}</p>
            <p><span className="font-bold">Hora:</span> {selectedTime}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bg-gray-700 bg-opacity-50 inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative mx-auto w-full max-w-lg">
        <div
          ref={modalRef}
          className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="text-3xl font-semibold">
              Agendamento
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative flex-auto p-6 max-h-96 overflow-auto">
            {renderStepContent()}
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
            {step < 4 ? (
              <button
                onClick={onClose}
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
              >
                Fechar
              </button>
            ) : (
              <button
                onClick={handleSchedule}
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded outline-none bg-indigo-600 active:bg-indigo-700 focus:outline-none hover:shadow-lg"
                type="button"
              >
                Agendar
              </button>
            )}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulesModal;
