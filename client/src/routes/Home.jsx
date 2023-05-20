import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import MobHome from "../components/MobHome";


const Home = () => {
  return (
    <div className="flex-col items-center flex-grow">
      <div className="">
        <Navbar />
      </div>

      <div className=" w-full min-h-[80vh]">
        <MobHome />
      </div>

      <section id="#about" className=" w-full h-auto">
        <About />
      </section>

    </div>
  );
};

export default Home;
