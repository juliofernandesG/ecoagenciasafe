import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Navbar = ({ open, toggleSidebar }) => {
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

  if (!isAuthenticated) {
    // Se o usuário não estiver autenticado, não renderize o Navbar
    return null;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleSidebar(!open)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Navbar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
