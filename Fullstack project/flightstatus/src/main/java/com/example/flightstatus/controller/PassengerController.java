package com.example.flightstatus.controller;

import com.example.flightstatus.model.Passenger;
import com.example.flightstatus.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/passengers")
@CrossOrigin(origins = "http://localhost:3000")
public class PassengerController {

    @Autowired
    private PassengerService passengerService;

    @GetMapping
    public List<Passenger> getAllPassengers() {
        return passengerService.getAllPassengers();
    }

    @GetMapping("/{pnr}")
    public Passenger getPassengerByPnr(@PathVariable String pnr) {
        return passengerService.getPassengerByPnr(pnr);
    }

    @PostMapping
    public Passenger addPassenger(@RequestBody Passenger passenger) {
        return passengerService.addPassenger(passenger);
    }

    @PutMapping("/{pnr}")
    public Passenger updatePassenger(@PathVariable String pnr, @RequestBody Passenger passenger) {
        passenger.setPnr(pnr);
        return passengerService.updatePassenger(passenger);
    }

    @DeleteMapping("/{pnr}")
    public void deletePassenger(@PathVariable String pnr) {
        passengerService.deletePassenger(pnr);
    }
}

