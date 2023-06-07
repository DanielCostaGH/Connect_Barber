import React, { useState } from "react";

const TimeSelector = ({ onSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onSelect(time);
  };

  // Array com os horários de trabalho
  const workHours = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  return (
    <div className="text-center">
      <h3 className="font-bold text-lg p-3">Selecione o horário:</h3>
    <div className="flex overflow-auto">
      
      {workHours.map((time) => (
        <div className="text-center rounded hover hover:bg-[#668fff] hover:text-white " key={time}>
          <p className="p-4 cursor-pointer w-1/2" name="time" value={time} onClick={() => handleTimeSelect(time)}>
              {time}
            </p>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default TimeSelector;
