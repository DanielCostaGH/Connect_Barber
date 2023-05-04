import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login"

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 to-black h-screen">
      <Navbar />
      <div className="">
        {/* Formulário de LOGIN */}
      <Login/>
      </div>
    </div>
  );
};

export default LoginPage;
