package com.example.flightstatus.service;

import com.example.flightstatus.model.Passenger;
import com.example.flightstatus.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassengerService {

    @Autowired
    private PassengerRepository passengerRepository;

    public List<Passenger> getAllPassengers() {
        return passengerRepository.findAll();
    }

    public Passenger getPassengerByPnr(String pnr) {
        return passengerRepository.findById(pnr).orElse(null);
    }

    public Passenger addPassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    public Passenger updatePassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    public void deletePassenger(String pnr) {
        passengerRepository.deleteById(pnr);
    }
}