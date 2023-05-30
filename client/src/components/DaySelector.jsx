import React, { useState } from 'react';

const DaySelector = ({ availableDays, onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    onSelectDay(day);
  };

  return (
    <div className='text-white'>
      <h2>Selecione o dia:</h2>
      <ul>
        {availableDays.map((day) => (
          <li
            key={day}
            className={selectedDay === day ? 'selected' : ''}
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
