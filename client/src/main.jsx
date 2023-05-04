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
import LoginPage from './routes/LoginPage';
import CriarConta from './routes/CriarConta';
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
          path: "/Account",
          element: <Account/>, 
        },

        {
          path: "/Schedules",
          element: <Schedules/>, 
        },

        {
          path: "/CriarConta",
          element: <CriarConta/>, 
        },

        {
          path: "/LoginPage",
          element: <LoginPage/>, 
        }
      ]
    },

   
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
