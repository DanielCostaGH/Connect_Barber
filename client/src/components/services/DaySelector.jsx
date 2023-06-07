import React, { useState } from 'react';

const DaySelector = ({ onSelect }) => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDaySelect = (event) => {
    const date = new Date(event.target.value);
    const formattedDay = formatDate(date);
    setSelectedDay(formattedDay);
    onSelect(formattedDay);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='text-center'>
      <h3 className="font-bold text-lg p-3">Selecione o dia:</h3>
      <input
        type="date"
        className="p-4 text-lg"
        onChange={handleDaySelect}
        value={selectedDay}
      />
    </div>
  );
};

export default DaySelector;
