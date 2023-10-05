import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Routes/PrivateRoute';

// Componente para redirecionamento
const RedirectToLogin = () => {
  useEffect(() => {
    window.location.href = '/login';
  }, []); // O array vazio significa que esse efeito será executado apenas uma vez após o primeiro render.

  return null; // Não renderiza nada, pois o seu único propósito é redirecionar.
};

// Componente principal App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/" element={<RedirectToLogin />} /> {/* Redirecionando rotas não correspondidas para /login */}
      </Routes>
    </Router>
  );
}

export default App;
