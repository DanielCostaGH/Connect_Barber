import React, { useState } from 'react';

const DaySelector = ({ availableDays, onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    onSelectDay(day);
  };

  return (
    <div className=''>
      <h2 className="mb-5 mt-5 font-bold text-2xl">Selecione o dia:</h2>
      <ul>
        {availableDays.map((day) => (
          <li
            key={day}
            className={`py-2 cursor-pointer text-lg border-black ${selectedDay === day ? 'border-t- border-b-2' : 'border-b-4'}`}
            onClick={() => handleDaySelect(day)}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaySelector;
