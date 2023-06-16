import React, { useState } from "react";

const TimeSelector = ({ onSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    const timeValue = new Date();
    const { hour, minute } = time;
    timeValue.setHours(hour, minute);
    setSelectedTime(timeValue);
    onSelect(timeValue.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
  };
  

  // Array com os horários de trabalho
  const hours = Array.from({ length: 10 }, (_, index) => {
    const hour = index + 8; // Inicia às 8h
    return { hour, minute: 0 };
  });

  return (
    <div className="text-center">
      <h3 className="font-bold text-lg p-3">Selecione o horário:</h3>
      <div className="flex overflow-auto">
        {hours.map((time, index) => (
          <div
            className="text-center rounded hover hover:bg-[#668fff] hover:text-white"
            key={`${time.hour}-${time.minute}-${index}`}
          >
            <p
              className="p-4 cursor-pointer w-1/2"
              name="time"
              value={time}
              onClick={() => handleTimeSelect(time)}
            >
              {`${time.hour.toString().padStart(2, "0")}:${time.minute.toString().padStart(2, "0")}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
