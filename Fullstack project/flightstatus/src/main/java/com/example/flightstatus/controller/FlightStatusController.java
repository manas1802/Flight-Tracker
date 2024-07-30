package com.example.flightstatus.controller;

import com.example.flightstatus.model.FlightStatus;
import com.example.flightstatus.service.FlightStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/flight-status")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightStatusController {

    @Autowired
    private FlightStatusService flightStatusService;

    @GetMapping
    public List<FlightStatus> getAllFlightStatuses() {
        return flightStatusService.getAllFlightStatuses();
    }

    @GetMapping("/{flightNumber}")
    public FlightStatus getFlightStatusByFlightNumber(@PathVariable String flightNumber) {
        return flightStatusService.getFlightStatusByFlightNumber(flightNumber);
    }

    @GetMapping("/by-pnr")
    public List<FlightStatus> getFlightStatusByPassengerPnrs(@RequestParam List<String> pnrList) {
        return flightStatusService.getFlightStatusByPassengerPnrs(pnrList);
    }

    @PostMapping
    public FlightStatus addFlightStatus(@RequestBody FlightStatus flightStatus) {
        return flightStatusService.addFlightStatus(flightStatus);
    }

    @PutMapping("/{flightNumber}")
    public FlightStatus updateFlightStatus(@PathVariable String flightNumber, @RequestBody FlightStatus flightStatus) {
        flightStatus.setFlightNumber(flightNumber);
        return flightStatusService.updateFlightStatus(flightStatus);
    }

    @DeleteMapping("/{flightNumber}")
    public void deleteFlightStatus(@PathVariable String flightNumber) {
        flightStatusService.deleteFlightStatus(flightNumber);
    }
}