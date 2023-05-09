import React from "react";

import aboutimg from "/images/aboutimg.jpg";


const About = () => {
  return (
    <section className="container-lg w-full h-screen bg-white">
      <h1 id="about" className="">ABOUT US</h1>
      <span>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </span>

      <h1>Profissionais:</h1>

      {/* <div>
        <img className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto" src={aboutimg} alt="" />
      </div> */}
    </section>
  );
};

export default About;
