import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home'; // Importe o ícone desejado
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Importe o ícone desejado
import SettingsIcon from '@mui/icons-material/Settings'; // Importe o ícone desejado
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Sidebar = ({ open, toggleSidebar }) => {
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
    // Se o usuário não estiver autenticado, não renderize o Sidebar
    return null;
  }

  return (
    <Drawer open={open} onClose={() => toggleSidebar(false)}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon /> {/* Ícone para a primeira opção do menu */}
          </ListItemIcon>
          <ListItemText primary="Página Inicial" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon /> {/* Ícone para a segunda opção do menu */}
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <Link to="/link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Automação" />
          </Link>
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Financeiro" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Relatórios" />
        </ListItem>
        <Divider /> {/* Adicione uma linha divisória */}
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon /> {/* Ícone para a terceira opção do menu */}
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
