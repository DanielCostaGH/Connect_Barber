import React from "react";
import Login from "../components/Login/Login"
import NavLogin from "../components/Navbar/NavLogin";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 to-black h-screen">
      <NavLogin/>
      <div className="">
        {/* Formulário de LOGIN */}
      <Login/>
      </div>
    </div>
  );
};

export default LoginPage;
