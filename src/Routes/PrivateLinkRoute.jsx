import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';

const PrivateRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (!user) {
    navigate('/login'); // Redirecionar para a página de login se o usuário não estiver autenticado
    return null;
  }

  return <Component />;
};

export default PrivateRoute;
