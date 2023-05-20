import React from "react";

import zuck from "../assets/images/barber1.png";
import bill from "../assets/images/barber2.png";
import elon from "../assets/images/barber3.png";
import putin from "../assets/images/barber4.png";
import abouticon from "../assets/images/abouticon.svg";
import Footer from "./Footer";

const About = () => {
  return (
    <section className="container-lg w-full h-auto bg-white">
      <div className="w-full text-white bg-gradient-to-l from-gray-800 to-gray-900 flex items- justify-center">
        <h1 id="about" className="p-4 text-4xl ">
          ABOUT US
        </h1>
        <img className="px-5" src={abouticon} alt="" />
      </div>
      <div className="flex justify-center">
        <p className="text-justify m-4 md:text-xl lg:w-4/6">
          Bem-vindos à Connect Barber, a melhor barbearia da cidade! Aqui,
          acreditamos que um bom corte de cabelo não é apenas uma questão de
          aparência, mas também de autoestima. É por isso que nossa equipe de
          barbeiros altamente qualificados está sempre pronta para lhe
          proporcionar uma experiência de corte de cabelo incrível, desde o
          momento em que você entra até o momento em que sai.Seja bem-vindo à
          Barberia Connect Barber, onde os cortes de cabelo incríveis andam de
          mãos dadas com a filantropia. Localizada no coração da cidade, nossa
          barbearia é mais do que um lugar para fazer a barba ou cortar o
          cabelo. Somos uma comunidade unida que se preocupa em fazer a
          diferença no mundo. E isso começa com nossos barbeiros talentosos.{" "}
          
        </p>
      </div>

      <h1 className="text-2xl w-full text-white bg-gradient-to-l from-gray-800 to-gray-900">
        Barbers:
      </h1>
      <div className="flex justify-center">
        <div className="block justify-between lg:w-4/6 md:w-full sm:flex">
          <div className="">
            <p className="text-start m-4 text-xl" htmlFor="">
              Zuck de Berg:
            </p>
            <img
              className="rounded-full border border-gray-300 h-40 w-40"
              src={zuck}
              alt=""
            />
          </div>
          <div>
            <p className="text-start m-4 text-xl" htmlFor="">
              Tio Bill:
            </p>
            <img
              className="rounded-full border border-gray-300 h-40 w-40"
              src={bill}
              alt=""
            />
          </div>
          <div>
            <p className="text-start m-4 text-xl" htmlFor="">
              Elias Mosca:
            </p>
            <img
              className="rounded-full border border-gray-300 h-40 w-40"
              src={elon}
              alt=""
            />
          </div>
          <div>
            <p className="text-start m-4 text-xl" htmlFor="">
              Paulo Puton:
            </p>
            <img
              className="rounded-full border border-gray-300 h-40 w-40"
              src={putin}
              alt=""
            />
          </div>
        </div>
      </div>

      <footer className="mt-5">
        <Footer />
      </footer>
    </section>
  );
};

export default About;
