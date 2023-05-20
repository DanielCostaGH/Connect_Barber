import React from "react";
import Navbar from "../components/Navbar"
import MobHome from "../components/MobHome"
import About from "../components/About"
import home_img_1 from "/images/home_img_1.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex-col items-center flex-grow">
      <div className="">
        <Navbar/>
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
