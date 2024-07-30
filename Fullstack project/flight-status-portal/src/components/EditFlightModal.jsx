import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditFlightModal = ({ open, flight, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...flight });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Flight</DialogTitle>
            <DialogContent>
                <TextField label="Flight Number" name="flightNumber" value={formData.flightNumber} onChange={handleChange} fullWidth margin="normal" disabled/>
                <TextField label="Source" name="source" value={formData.source} onChange={handleChange} fullWidth margin="normal" disabled/>
                <TextField label="Destination" name="destination" value={formData.destination} onChange={handleChange} fullWidth margin="normal" disabled/>
                <TextField label="Departure Date" name="departureDate" value={formData.departureDate} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Arrival Date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Scheduled Departure Time" name="scheduledDepartureTime" value={formData.scheduledDepartureTime} onChange={handleChange} fullWidth margin="normal" disabled/>
                <TextField label="Scheduled Arrival Time" name="scheduledArrivalTime" value={formData.scheduledArrivalTime} onChange={handleChange} fullWidth margin="normal" disabled/>
                <TextField label="Actual Departure Time" name="actualDepartureTime" value={formData.actualDepartureTime} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Actual Arrival Time" name="actualArrivalTime" value={formData.actualArrivalTime} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Boarding Gate" name="boardingGate" value={formData.boardingGate} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Terminal" name="terminal" value={formData.terminal} onChange={handleChange} fullWidth margin="normal" disabled/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};
export default EditFlightModal;