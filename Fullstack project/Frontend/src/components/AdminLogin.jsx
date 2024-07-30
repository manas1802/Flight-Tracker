import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import indigoLogo from '../images/indigo-logo-EDBB4B3C09-seeklogo.com.png';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static login credentials for demonstration
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>
      <Paper elevation={3} style={{ overflow: 'hidden', borderRadius: '8px', width: '100%' , height:'400px'}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box padding={4} display="flex" flexDirection="column" justifyContent="center" height="100%">
              <Typography variant="h4" gutterBottom>Admin Login</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                  Login
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} style={{ backgroundColor: '#FFFFFF' }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              marginLeft={6}
              marginTop={4}
              style={{
                backgroundImage: `url(${indigoLogo})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
              }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
