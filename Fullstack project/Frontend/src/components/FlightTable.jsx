import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tableContainer: {
        marginTop: '16px',
    },
    header: {
        backgroundColor: '#1976d2',
        // color: '#fff',
    },
    headerCell: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5',
        },
    },
    button: {
        backgroundColor: '#1976d2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
});

const FlightTable = ({ flights, onEdit }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                <TableHead>
                <TableRow className={classes.header}>
                        <TableCell className={classes.headerCell}>Flight Number</TableCell>
                        <TableCell className={classes.headerCell}>Source</TableCell>
                        <TableCell className={classes.headerCell}>Destination</TableCell>
                        <TableCell className={classes.headerCell}>Departure Date</TableCell>
                        <TableCell className={classes.headerCell}>Arrival Date</TableCell>
                        <TableCell className={classes.headerCell}>Scheduled Departure Time</TableCell>
                        <TableCell className={classes.headerCell}>Scheduled Arrival Time</TableCell>
                        <TableCell className={classes.headerCell}>Actual Departure Time</TableCell>
                        <TableCell className={classes.headerCell}>Actual Arrival Time</TableCell>
                        <TableCell className={classes.headerCell}>Boarding Gate</TableCell>
                        <TableCell className={classes.headerCell}>Terminal</TableCell>
                        <TableCell className={classes.headerCell}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flights.map((flight) => (
                        <TableRow key={flight.flightNumber} className={classes.row}>
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
                            <TableCell>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => onEdit(flight)}
                                >
                                    Update Status
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FlightTable;
