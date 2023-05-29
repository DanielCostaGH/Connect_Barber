import React from "react";
import { Link } from "react-router-dom";
import NavInsider from "../components/NavInsider";
import add_icon from "../assets/images/add_icon.svg";
import reticences_icon from "../assets/images/reticences_icon.svg";
import Footer from "../components/Footer";

const Schedules = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavInsider />
      <div className="flex">
        <button className="bg-gray-900 w-72 text-white rounded-md uppercase m-10 mx-auto">
          <Link to="/ServicePage" className="flex justify-around p-3">
            <img src={add_icon} alt="" />
            <h1>Novo Agendamento</h1>
          </Link>
        </button>
      </div>

      <h1 className="font-bold text-2xl text-center p-5">MEUS AGENDAMENTOS</h1>

      <div className="border-b-2 border-black flex">
        <p className="p-3 w-2/6 text-center">Corte</p>
        <p className="p-3 w-2/6 text-center">16:00</p>
        <p className="p-3 w-2/6 text-center">30/10/2023</p>
      </div>

      <div className="border-b-2 border-black flex">
        <p className="p-3 w-2/6 text-center">Barba</p>
        <p className="p-3 w-2/6 text-center">16:00</p>
        <p className="p-3 w-2/6 text-center">30/10/2023</p>
      </div>

      <div className="border-b-2 border-black flex">
        <p className="p-3 w-2/6 text-center">Corte + Barba</p>
        <p className="p-3 w-2/6 text-center">16:00</p>
        <p className="p-3 w-2/6 text-center">30/10/2023</p>
      </div>

      <div className="flex-grow">
        <img className="mx-auto p-20" src={reticences_icon} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Schedules;

