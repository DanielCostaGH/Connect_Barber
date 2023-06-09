import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const Cadastro = () => {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/CriarConta", {
      name: values.name,
      email: values.email,
      tell: values.tell,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      window.location.href = "/LoginPage";
    });
  };

  const validationRegister = yup.object().shape({
    email: yup.string().email().required("Email é Obrigatório"),
    password: yup.string().min(8).required("Senha deve ter 8 caracteres."),
    name: yup.string().required("Nome é Obrigatório."),
    tell: yup.string().required("Telefone é Obrigatório."),
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full flex-col justify-center text-center items-center my-24">
        <>
          <h1 className="text-white font-bold text-3xl">CRIAR CONTA</h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
          >
            <Form className="" action="">
              <div className="m-5 mx-auto">
                <Field
                  className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp w-auto sm:w-inp px-5"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome    |"
                />

                <ErrorMessage
                  component="span"
                  name="name"
                  className="text-white w-6/6 relative block"
                />
              </div>

              <div className="m-5 mx-auto">
                <Field
                  className="placeholder-gray-900 placeholder-opacity-100 rounded-md h-inp px-5 w-auto sm:w-inp"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email   |"
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
                  type="tel"
                  id="tell"
                  name="tell"
                  placeholder="Telefone   |"
                />

                <ErrorMessage
                  component="span"
                  name="tell"
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

              <div className="w-full">
                <button
                  type="submit"
                  className="bg-white m-2 rounded-md w-btns h-btns"
                >
                  REGISTRAR
                </button>
              </div>
            </Form>
          </Formik>

          <a href="/LoginPage" className="text-white p-4">
            Fazer Login
          </a>
        </>
      </div>
    </div>
  );
};

export default Cadastro;
