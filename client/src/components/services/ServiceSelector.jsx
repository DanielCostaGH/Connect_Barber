import React from 'react';

const services = [
  { id: 1, name: 'Corte de Cabelo', valor: 30 },
  { id: 2, name: 'Barba', valor: 20 },
  { id: 3, name: 'Corte e Barba', valor: 60 },
  { id: 4, name: 'Progressiva', valor: 60 },
  { id: 5, name: 'Pigmentação', valor: 60 },
  { id: 3, name: 'Corte e Barba', valor: 60 },
  { id: 3, name: 'Corte e Barba', valor: 60 },
  { id: 3, name: 'Corte e Barba', valor: 60 },

];

const ServiceSelector = ({ onSelect }) => {
  const handleServiceSelect = (service) => {
    onSelect(service);
  };

  return (
    <div>
      <h3 className="font-bold text-lg p-3">Selecione o serviço:</h3>
      {services.map((service) => (
        <div className='flex cursor-pointer justify-between rounded hover hover:bg-[#668fff] hover:text-white' key={service.id} onClick={() => handleServiceSelect(service.name)}>
          <p className='p-3' >{service.name}</p>
          <p className='p-3' >{service.valor}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
