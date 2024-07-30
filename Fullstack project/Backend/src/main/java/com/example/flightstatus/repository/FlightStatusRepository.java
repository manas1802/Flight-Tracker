package com.example.flightstatus.repository;

import com.example.flightstatus.model.FlightStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FlightStatusRepository extends MongoRepository<FlightStatus, String> {

    @Query("{ 'passengerPnrs': { $in: ?0 } }")
    List<FlightStatus> findByPassengerPnrsIn(List<String> pnrList);

}
