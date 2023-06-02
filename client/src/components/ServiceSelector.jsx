import React, { useState } from 'react';

const ServiceSelector = ({ services, onSelectService }) => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    onSelectService(service);
  };

  return (
    <div className=''>
      <h2 className="mb-5 mt-5 font-bold text-2xl">Selecione o serviço:</h2>
      <ul>
        {services.map((service) => (
          <li
            key={service.id}
            className={`py-2 cursor-pointer text-lg border-black ${selectedService === service ? 'border-t- border-b-2' : 'border-b-4'}`}
            onClick={() => handleServiceSelect(service)}
          >
            <div className='flex justify-between'>

              <div>
              {service.name}
              </div>

              <div>
              {service.value}
              </div>

            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelector;
