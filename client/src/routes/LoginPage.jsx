import React from "react";
import Login from "../components/Login"
import NavLogin from "../components/NavLogin";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-l from-gray-800 to-gray-900 h-screen">
      <NavLogin/>
      <div className="">
      <Login/>
      </div>
    </div>
  );
};

export default LoginPage;
