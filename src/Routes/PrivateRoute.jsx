import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';

const PrivateRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (!user) {
    navigate('/login');
    return null;
  }

  return <Component />;
};

export default PrivateRoute;
