package com.example.flightstatus.service;

import com.example.flightstatus.model.FlightStatus;
import com.example.flightstatus.repository.FlightStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightStatusService {

    @Autowired
    private FlightStatusRepository flightStatusRepository;

    @Autowired
    private EmailService notificationService;

    public List<FlightStatus> getAllFlightStatuses() {
        return flightStatusRepository.findAll();
    }

    public FlightStatus getFlightStatusByFlightNumber(String flightNumber) {
        return flightStatusRepository.findById(flightNumber).orElse(null);
    }

    public List<FlightStatus> getFlightStatusByPassengerPnrs(List<String> pnrList) {
        return flightStatusRepository.findByPassengerPnrsIn(pnrList);
    }

    public FlightStatus addFlightStatus(FlightStatus flightStatus) {
        return flightStatusRepository.save(flightStatus);
    }

    public FlightStatus updateFlightStatus(FlightStatus flightStatus) {
        FlightStatus updatedStatus = flightStatusRepository.save(flightStatus);

        // Send notification
//        notificationService.sendNotification("Flight status updated for flight number: " + flightStatus.getFlightNumber());

        return updatedStatus;
    }

    public void deleteFlightStatus(String flightNumber) {
        flightStatusRepository.deleteById(flightNumber);
    }
}
