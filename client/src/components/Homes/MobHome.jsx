import React from "react";
import { Link } from "react-router-dom";
import Insta from "../../../public/images/Insta.svg";
import twitter from "/images/twitter.svg";
import face from "../../../public/images/face.svg";

const MobHome = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <div>
        <h1 className="text-white font-oswaldbold text-3xl md:text-4xl m-2 h-32 align-middle">
          Cadastre-se e seja{" "}
          <span className="font-bold uppercase">bem vindo</span>.
        </h1>
      </div>

      <div>
        <Link className="nav-items" to="/LoginPage">
          <button className="font-bold px-12 py-3 mb-12 bg-white rounded uppercase">
            Connect
          </button>
        </Link>
      </div>

      <div className="flex">
        <div>
          <img className="h-14 w-14  m-2" src={face} alt="Logo" />
        </div>

        <div>
          <img className="h-14 w-14 m-2" src={Insta} alt="Logo" />
        </div>

        <div>
          <img className="h-14 w-14  m-2" src={twitter} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default MobHome;
