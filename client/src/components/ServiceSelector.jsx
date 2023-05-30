import React, { useState } from 'react';

const ServiceSelector = ({ services, onSelectService }) => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    onSelectService(service);
  };

  return (
    <div className='text-white'>
      <h2 className="mb-5 mt-5">Selecione o serviço:</h2>
      <ul>
        {services.map((service) => (
          <li
            key={service.id}
            className={`py-2 ${selectedService === service ? 'border-t border-b' : 'border-b'}`}
            onClick={() => handleServiceSelect(service)}
          >
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelector;
