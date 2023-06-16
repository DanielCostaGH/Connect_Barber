import React, { useEffect, useState } from "react";
import axios from "axios";
import NavInsider from "../components/NavInsider";
import add_icon from "../assets/images/add_icon.svg";
import reticences_icon from "../assets/images/reticences_icon.svg";
import Footer from "../components/Footer";
import SchedulesModal from "../components/modals/ScheduleModal";
import jwt_decode from "jwt-decode";
import { format } from "date-fns";

const Schedules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Agendamentos/${userId}`);
        setSchedules(response.data);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    };
    if (userId !== null) {
      fetchSchedules();
    }
  }, [userId]);

   
  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavInsider />
      <div className="flex">
        <button
          className="bg-gray-900 w-72 flex justify-around p-3 text-white rounded-md uppercase m-10 mx-auto"
          onClick={handleOpenModal}
        >
          <img src={add_icon} alt="" />
          <h1>Novo Agendamento</h1>
        </button>
      </div>

      <h1 className="font-bold text-2xl text-center p-5">MEUS AGENDAMENTOS</h1>

      {/* card de agendamento */}
      {schedules.length > 0 ? (
        schedules.map((schedule) => (
          <div className="border-b-4 border-black flex" key={schedule.ID_REQUEST}>
            <p className="p-3 w-2/6 text-center">{schedule.SERVICE_NAME}</p>
            <p className="p-3 w-2/6 text-center">{schedule.TIME}</p>
            <p className="p-3 w-2/6 text-center">{format(new Date(schedule.DATE), "dd/MM/yyyy")}</p>
          </div>
        ))
      ) : (
        <p className="text-center font-bold text-xl text-[#923030] p-5">Voce não possui agendamentos.</p>
      )}

      <div className="flex-grow">
        <img className="mx-auto p-20" src={reticences_icon} alt="" />
      </div>

      <Footer />

      {isModalOpen && <SchedulesModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Schedules;
