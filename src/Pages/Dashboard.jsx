import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';


const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <div>
      <CssBaseline />
      <Navbar open={open} toggleSidebar={toggleSidebar} />
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <main>
        <div style={{ marginTop: '64px' }} /> {/* Espaço para a barra superior */}
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
              
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;
