import React from 'react';

const TimeSelector = ({ availableTimes, onSelectTime }) => {
  const handleTimeSelect = (time) => {
    onSelectTime(time);
  };

  return (
    <div className=''>
      <h2 className='mb-5 mt-5 font-bold text-2xl'>Selecione o horário:</h2>
      <ul>
        {availableTimes.map((time) => (
          <li className='py-2 cursor-pointer text-lg border-black border-t- border-b-4'  key={time} onClick={() => handleTimeSelect(time)}>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSelector;
