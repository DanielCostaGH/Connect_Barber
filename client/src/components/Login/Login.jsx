import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const Login = () => {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/LoginPage", {
      email: values.email,
      password: values.password,
    }).then((response) => {

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = '/Schedules';
      } else {
        alert(response.data);
      }
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email().required("Campo Obrigatório"),
    password: yup.string().min(8).required("Senha deve ter 8 caracteres."),
  });

  return (
    <section className="w-full h-screen items-center my-24">
      <h1 className="text-white font-bold text-3xl mx-auto">LOGIN</h1>

      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="">
          <div className="m-5 mx-auto">
            <Field
              className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
              type="text"
              id="email"
              name="email"
              placeholder="Email    |"
            />

            <ErrorMessage
              component="span"
              name="email"
              className="text-white w-6/6 relative block"
            />
          </div>

          <div className="m-5 mx-auto">
            <Field
              className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
              type="password"
              id="password"
              name="password"
              placeholder="Senha   |"
            />

            <ErrorMessage
              component="span"
              name="password"
              className="text-white w-6/6 relative block"
            />
          </div>

          <div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-white m-2 rounded-md w-btns h-btns"
              >
                <h1>ENTRAR</h1>
              </button>
            </div>

            <a href="/CriarConta" className="text-white p-4">
              Criar Conta
            </a>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Login;
