import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField } from '@mui/material';
import FlightTable from './FlightTable';
import EditFlightModal from './EditFlightModal';
import { getAllFlights, updateFlight, getPassengerByPnr , getFlightStatusByFlightNumber} from '../api';
import axios from 'axios';

const AdminPortal = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadFlights();
    }, []);

    const loadFlights = async () => {
        const response = await getAllFlights();
        setFlights(response.data);
    };

    const handleEdit = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedFlight(null);
    };

    const handleSave = async (updatedFlight) => {
        const Response = await getFlightStatusByFlightNumber(updatedFlight.flightNumber);
        // console.log(Response);
        const oldStatus = Response.data;
        
        const response = await updateFlight(updatedFlight.flightNumber, updatedFlight);
        const updatedDetails = response.data;
        const passengerList = response.data.passengerPnrs;

        // Fetch passenger details
        const passengerResponses = await Promise.all(passengerList.map(pnr => getPassengerByPnr(pnr)));
        const passengerEmails = passengerResponses.map(response => response.data.email);        
        
        // Notify passengers (this should be handled by the backend)
        await notifyPassengers(passengerEmails, updatedDetails , oldStatus);

        loadFlights();
        handleClose();
    };

    const notifyPassengers = async (passengerEmails, updatedDetails , oldStatus) => {
        // let message = JSON.stringify(updatedDetails);
        // let oldmessage = JSON.stringify(oldStatus);

        // message = "Your flight status is updated, the updated flight status is: " + message;

        let newStatusMessage = JSON.stringify(updatedDetails, null, 2);
        let oldStatusMessage = JSON.stringify(oldStatus, null, 2);

        const createEmailMessage = (oldStatus, newStatus) => `
            Dear Passenger,

            This is to inform you that there has been a change in your flight status. Please find the details below:

            **Previous Flight Status:**
            ${oldStatus}

            **Updated Flight Status:**
            ${newStatus}

            If you have any questions or need further assistance, please do not hesitate to contact our customer support.

            Thank you for choosing Indigo Airlines.

            Sincerely,
            Indigo Airlines Team
        `;

        const message = createEmailMessage(oldStatusMessage, newStatusMessage);

        for (const email of passengerEmails) {
            try {
                await axios.post('http://localhost:8082/api/notify-passengers', {
                    email: email,
                    message: message
                });
            } catch (error) {
                console.error(`Failed to send notification to ${email}:`, error);
            }
        }
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filtered flights based on search query
    const filteredFlights = flights.filter((flight) =>
        flight.flightNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Admin Portal</Typography>
            <TextField
                label="Search by Flight Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <FlightTable flights={filteredFlights} onEdit={handleEdit} />
            {selectedFlight && (
                <EditFlightModal
                    open={open}
                    flight={selectedFlight}
                    onClose={handleClose}
                    onSave={handleSave}
                />
            )}
        </Container>
    );
};

export default AdminPortal;

