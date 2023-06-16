import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DaySelector = ({ onSelect }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    if (onSelect) {
      const formattedDay = format(day, "MM/dd/yyyy");
      onSelect(formattedDay);
    }
  };

  return (
    <div className="text-center h-72">
      <h2>Selecione um dia:</h2>
      <DatePicker
      className="border-2 border-gray-600"
        selected={selectedDay}
        onChange={handleDayChange}
        dateFormat="dd-MM-yyyy"
      />
    </div>
  );
};

export default DaySelector;
