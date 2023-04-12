import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//import de router
import {
  createBrowserRouter,
  RouterProvider } from "react-router-dom";
//import de paginas
import Home from "./routes/Home";
import About from './routes/About';
import Contact from './routes/Contact'
import LoginCliente from './routes/LoginCliente';
import LoginProfissional from './routes/LoginProfissional';
import Account from './routes/Account';
import Schedules from './routes/Schedules';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>, 
      children: [
        {
          path: "/",
          element: <Home/>, 
        },

        {
          path: "/About",
          element: <About/>, 
        },

        {
          path: "/Contact",
          element: <Contact/>, 
        },

        {
          path: "/Account",
          element: <Account/>, 
        },

        {
          path: "/Schedules",
          element: <Schedules/>, 
        },

        {
          path: "/LoginProfissional",
          element: <LoginProfissional/>, 
        },

        {
          path: "/LoginCliente",
          element: <LoginCliente/>, 
        }
      ]
    },

   
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
