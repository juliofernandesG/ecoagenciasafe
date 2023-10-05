import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Typebot from '../Assets/images/Typebot.jpg';
import Chatwoot from '../Assets/images/chatwoot.png';
import N8n from '../Assets/images/n8n.png';
import Appsmith from '../Assets/images/appsmith_.png';
import Api from '../Assets/images/transferir (3).png';

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

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3} justifyContent="center"> {/* Alinhado ao centro */}
          {[{img: Typebot, link: "https://flow.agenciasafe.com"},
            {img: Chatwoot, link: "SEU_LINK_2"},
            {img: N8n, link: "https://conect.agenciasafe.com"},
            {img: Appsmith, link: "https://nocode.agenciasafe.com"},
            {img: Api, link: "https://auto.agenciasafe.com/manager"}].map((app, index) => (
              <Grid item xs={12} sm={2} md={2} key={index}>
                <Card style={{ backgroundColor: theme.palette.secondary.main }}>
                  <CardContent>
                    <a href={app.link} target="_blank" rel="noopener noreferrer">
                      <img src={app.img} alt={`Aplicativo ${index+1}`} style={{width: '100%'}} />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
