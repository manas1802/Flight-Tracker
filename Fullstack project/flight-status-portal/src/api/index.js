import axios from 'axios';

const API_URL = 'http://localhost:8082/api';

export const getAllFlights = () => axios.get(`${API_URL}/flight-status`);
export const getFlightStatusByFlightNumber = (flightNumber) => axios.get(`${API_URL}/flight-status/${flightNumber}`);
export const updateFlight = (flightNumber, data) => axios.put(`${API_URL}/flight-status/${flightNumber}`, data);
export const getPassengerByPnr = (pnr) => axios.get(`${API_URL}/passengers/${pnr}`);
export const getFlightDetailsByPnrList = async (pnrList) => {
    return axios.get(`http://localhost:8082/api/flight-status/by-pnr`, {
        params: { pnrList: pnrList.join(',') }
    });
};