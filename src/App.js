import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Link from './Components/Links/Link';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Componente principal App
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Use o Firebase para verificar o estado de autenticação do usuário
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado
        setIsAuthenticated(true);
      } else {
        // O usuário não está autenticado
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/link"
          element={isAuthenticated ? <Link /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
