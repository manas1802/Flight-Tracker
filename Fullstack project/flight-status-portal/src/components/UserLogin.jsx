import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import indigoLogo from '../images/indigo-logo-EDBB4B3C09-seeklogo.com.png';

const UserLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const [pnr, setPnr] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPnr(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pnr) {
            navigate(`/user/${pnr}`);
        } else {
            alert('Please enter a valid PNR');
        }
    };

    return (

        <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>
      <Paper elevation={3} style={{ overflow: 'hidden', borderRadius: '8px', width: '100%' , height:'400px'}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box padding={4} display="flex" flexDirection="column" justifyContent="center" height="100%">
              <Typography variant="h4" gutterBottom>User Login</Typography>
              <form onSubmit={handleSubmit}>
              <TextField
                    label="PNR"
                    value={pnr}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <h1></h1>
                <div style={{ color: 'white' }}>
                    <p>extra text</p>
                </div>
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

export default UserLogin;
