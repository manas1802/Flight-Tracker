package com.example.flightstatus.repository;

import com.example.flightstatus.model.Passenger;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PassengerRepository extends MongoRepository<Passenger, String> {
}