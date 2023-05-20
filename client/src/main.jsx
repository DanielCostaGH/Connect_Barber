import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Importações do router
import {
  createBrowserRouter,
  RouterProvider,
  useMatch,
  Navigate
} from 'react-router-dom';

// Importações das páginas
import Home from './routes/Home';
import LoginPage from './routes/LoginPage';
import CriarConta from './routes/CriarConta';
import Account from './routes/Account';
import Schedules from './routes/Schedules';

// Componente de rota privada
const PrivateRoute = ({ path, element }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  return isLoggedIn ? element : <Navigate to="/LoginPage" />;
};

// Função auxiliar para criar rotas privadas
const createPrivateRoute = (path, element) => {
  return {
    path,
    element: <PrivateRoute path={path} element={element} />,
  };
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/CriarConta',
        element: <CriarConta />,
      },
      {
        path: '/LoginPage',
        element: <LoginPage />,
      },
      createPrivateRoute('/Account', <Account />),
      createPrivateRoute('/Schedules', <Schedules />),
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
