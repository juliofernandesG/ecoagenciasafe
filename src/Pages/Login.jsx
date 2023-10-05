import React, { useState } from 'react';
import { auth } from '../Config/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Adicione esta linha
import { Button, TextField, Container, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Adicione esta linha

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential);
      // Redirecionar para o Dashboard
      navigate('/dashboard'); // Adicione esta linha (substitui window.location.href)
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  marginTop: '5em'  }}>
          <Typography component="h1" variant="h5">
            Entre com sua conta
          </Typography>
          <form style={{ width: '100%', marginTop: '5em' }} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Entre
            </Button>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
