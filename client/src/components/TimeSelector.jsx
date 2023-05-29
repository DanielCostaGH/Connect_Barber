import React from 'react';

const TimeSelector = ({ availableTimes, onSelectTime }) => {
  const handleTimeSelect = (time) => {
    onSelectTime(time);
  };

  return (
    <div className='text-white'>
      <h2>Selecione o horário:</h2>
      <ul>
        {availableTimes.map((time) => (
          <li className='cursor-pointer' key={time} onClick={() => handleTimeSelect(time)}>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSelector;
