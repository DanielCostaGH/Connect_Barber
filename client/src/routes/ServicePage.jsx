import React, { useState } from "react";
import ServiceSelector from "../components/ServiceSelector";
import DaySelector from "../components/DaySelector";
import TimeSelector from "../components/TimeSelector";
import NavInsider from "../components/NavInsider";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 1, name: "Corte de cabelo" },
    { id: 2, name: "Barba" },
    { id: 3, name: "Pacote completo" },
  ];

  const availableDays = ["01/06/2023", "02/06/2023", "03/06/2023"];

  const availableTimes = ["09:00", "10:00", "11:00", "12:00"];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  let content = null;

  if (!selectedService) {
    content = (
      <ServiceSelector
        services={services}
        onSelectService={handleServiceSelect}
      />
    );
  } else if (selectedService && !selectedDay) {
    content = (
      <DaySelector
        availableDays={availableDays}
        onSelectDay={handleDaySelect}
      />
    );
  } else if (selectedService && selectedDay && !selectedTime) {
    content = (
      <TimeSelector
        availableTimes={availableTimes}
        onSelectTime={handleTimeSelect}
      />
    );
  } else if (selectedService && selectedDay && selectedTime) {
    content = (
      <div className="text-white">
        <h2 className="text-lg font-bold mt-4">
          Resumo do Agendamento:
        </h2>
        <p>Serviço: {selectedService.name}</p>
        <p>Dia: {selectedDay}</p>
        <p>Horário: {selectedTime}</p>
        <button className="p-2 mt-5 bg-white text-black"><h1 className="mx-auto">Agendar</h1></button>
      </div>
    );
  }

  return (
    <>
      <NavInsider />
      <div className="h-screen bg-gradient-to-l from-gray-800 to-gray-900">
        <div className=" ">
          <div className="w-full max-w-md p-4 mx-auto">{content}</div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;