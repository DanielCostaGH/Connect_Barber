import React from "react";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import MobHome from "../components/Homes/MobHome";
import home_img_1 from "/images/home_img_1.jpg";
import aboutimg from "../../public/images/aboutimg.jpg";
import Footer from "../components/Footer/Footer";

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
