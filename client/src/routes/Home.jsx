import React from "react";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import MobHome from "../components/Homes/MobHome";
import home_img_1 from "/images/home_img_1.jpg";

const Home = () => {
  return (
    <div className="flex-col items-center bg-gradient-to-br from-gray-600 to-black">
      <div className="">
        <Navbar />
      </div>

      <div className=" w-full h-96">
        <MobHome />
      </div>

      <section id="#about" className=" w-full h-96">
        <About />
      </section>
    </div>
  );
};

export default Home;
