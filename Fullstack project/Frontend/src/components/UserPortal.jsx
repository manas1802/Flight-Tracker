import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPassengerByPnr, getFlightDetailsByPnrList } from '../api';
import { makeStyles } from '@mui/styles';

// Define custom styles
const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(3),
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    header: {
      color: '#fff',
      padding: theme.spacing(2),
      borderRadius: '8px 8px 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flightRow: {
        backgroundColor: '#f1f9ff',
        padding:'20px',
        '&:hover': {
          backgroundColor: '#dbeffe',
        },
        transition: 'background-color 0.3s ease',
      },
      table: {
        marginTop: theme.spacing(2),
        '& th': {
          backgroundColor: '#2196f3',
          color: '#fff',
          fontWeight: 'bold',
        },
        '& td': {
          padding: theme.spacing(5),
          color: '#37474f',
        },
      },
      arrived: {
        backgroundColor: '#e1f5fe',
        padding: theme.spacing(1),
        borderRadius: 4,
        color: '#0288d1',
        fontWeight: 'bold',
      },
      pnrInfo: {
        padding: theme.spacing(2),
        backgroundColor: '#bbdefb',
        borderRadius: 8,
        marginBottom: theme.spacing(2),
      },
    }));
    const UserPortal = () => {
        const classes = useStyles();
        const { pnr } = useParams();
        const [passenger, setPassenger] = useState(null);
        const [flights, setFlights] = useState([]);
      
        useEffect(() => {
          loadPassenger();
        }, [pnr]);
      
        const loadPassenger = async () => {
          try {
            const response = await getPassengerByPnr(pnr);
            setPassenger(response.data);
      
            if (response.data && response.data.pnr) {
              const flightResponse = await getFlightDetailsByPnrList([response.data.pnr]);
              setFlights(flightResponse.data);
            }
          } catch (error) {
            console.error('Error loading passenger data:', error);
          }
        };
        return (
            <Container className={classes.container}>
              <Typography variant="h4" gutterBottom className={classes.header}>
                <div style={{ color: 'black' }}>
                User Details
                </div>
              </Typography>
              {passenger ? (
                <Box className={classes.pnrInfo}>
                  <Typography variant="h6">PNR: {passenger.pnr}</Typography>
                  <Typography>Name: {passenger.name}</Typography>
                  <Typography>Phone Number: {passenger.phoneNumber}</Typography>
                  <Typography>Email: {passenger.email}</Typography>
                </Box>
              ) : (
                <Typography>No passenger found with PNR: {pnr}</Typography>
              )}
        
              <Typography variant="h4" className={classes.header}>
              <div style={{ color: 'black'}}>
                Flight Details
                </div>
              </Typography>
              {flights.length > 0 ? (
                <TableContainer component={Paper}>
                  <Table className={classes.table}>
                  <TableHead>
              <TableRow>
                <TableCell>Flight Number</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Departure Date</TableCell>
                <TableCell>Arrival Date</TableCell>
                <TableCell>Scheduled Departure</TableCell>
                <TableCell>Scheduled Arrival</TableCell>
                <TableCell>Actual Departure</TableCell>
                <TableCell>Actual Arrival</TableCell>
                <TableCell>Boarding Gate</TableCell>
                <TableCell>Terminal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {flights.map((flight) => (
                <TableRow key={flight.flightNumber} className={classes.flightRow}>
                  <TableCell>{flight.flightNumber}</TableCell>
                  <TableCell>{flight.source}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.departureDate}</TableCell>
                  <TableCell>{flight.arrivalDate}</TableCell>
                  <TableCell>{flight.scheduledDepartureTime}</TableCell>
                  <TableCell>{flight.scheduledArrivalTime}</TableCell>
                  <TableCell>{flight.actualDepartureTime}</TableCell>
                  <TableCell>{flight.actualArrivalTime}</TableCell>
                  <TableCell>{flight.boardingGate}</TableCell>
                  <TableCell>{flight.terminal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No flight details found.</Typography>
      )}
    </Container>
  );
};

export default UserPortal;    
      
