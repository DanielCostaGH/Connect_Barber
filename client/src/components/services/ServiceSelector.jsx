import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceSelector = ({ onSelect }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar serviços:', error);
      });
  }, []);

  const handleServiceSelect = (service) => {
    onSelect(service);
  };

  return (
    <div>
      <h3 className="font-bold text-lg p-3">Selecione o serviço:</h3>
      {services.map((service) => (
        <div className='flex cursor-pointer justify-between rounded hover hover:bg-[#668fff] hover:text-white' key={service.id_service} onClick={() => handleServiceSelect(service.SERVICE_NAME)}>
          <p className='p-3'>{service.SERVICE_NAME}</p>
          <p className='p-3'>{service.SERVICE_VALUE}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
