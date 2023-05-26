import React from "react";
import Login from "../components/Login";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-l from-gray-800 to-gray-900">
      {/* Component Navbar de login */}
      <NavLogin />

     {/* Formulário de LOGIN */}
        <Login />

      {/* Component Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
