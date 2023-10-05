import React, { useState } from 'react';
import { Container, Card, CardContent, ThemeProvider, createTheme, Link as MuiLink } from '@mui/material';
import Typebot from '../../Assets/images/typebot.png';
import Chatwoot from '../../Assets/images/chatwoot.png';
import N8n from '../../Assets/images/n8n.png';
import Appsmith from '../../Assets/images/appsmith_.png';
import Api from '../../Assets/images/transferir (3).png';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: '#000099',
    },
  },
});

const Link = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const apps = [
    { img: Typebot, link: 'https://flow.agenciasafe.com' },
    { img: Chatwoot, link: 'SEU_LINK_2' },
    { img: N8n, link: 'https://conect.agenciasafe.com' },
    { img: Appsmith, link: 'https://nocode.agenciasafe.com' },
    { img: Api, link: 'https://auto.agenciasafe.com/manager' },
  ];

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <ThemeProvider theme={theme}>
      <Navbar open={open} toggleSidebar={toggleSidebar} />
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <Container style={{ padding: 0 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
        }}>
          {apps.map((app, index) => (
            <Card
              style={{
                backgroundColor: 'rgba(0, 35, 225, 0.8)',
                borderRadius: '10px',
                flex: '0 0 calc(20% - 20px)',
                margin: '10px',
                padding: '10px',
                maxWidth: '20%',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out',
                ...(hover ? { transform: 'scale(1.05)' } : {}),
              }}
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent>
                <MuiLink href={app.link} target="_blank" rel="noopener noreferrer" underline="none">
                  <img src={app.img} alt={`Aplicativo ${index + 1}`} style={{ width: '100%' }} />
                </MuiLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Link;
