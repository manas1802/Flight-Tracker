//package com.example.flightstatus;
//
//import com.example.flightstatus.model.FlightStatus;
//import com.example.flightstatus.model.Passenger;
//import com.example.flightstatus.repository.FlightStatusRepository;
//import com.example.flightstatus.repository.PassengerRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.util.Arrays;
//import java.util.List;
//
//@Component
//public class DataLoader implements CommandLineRunner {
//
//    @Autowired
//    private FlightStatusRepository flightStatusRepository;
//
//    @Autowired
//    private PassengerRepository passengerRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        // Delete existing data
//        flightStatusRepository.deleteAll();
//        passengerRepository.deleteAll();
//
//        // Add flights
//        FlightStatus flight1 = new FlightStatus();
//        flight1.setFlightNumber("FL123");
//        flight1.setSource("New York");
//        flight1.setDestination("Los Angeles");
//        flight1.setDepartureDate("2024-08-01");
//        flight1.setArrivalDate("2024-08-01");
//        flight1.setScheduledDepartureTime("08:00");
//        flight1.setScheduledArrivalTime("11:00");
//        flight1.setActualDepartureTime("08:00");
//        flight1.setActualArrivalTime("11:00");
//        flight1.setBoardingGate("A1");
//        flight1.setTerminal("1");
//
//        FlightStatus flight2 = new FlightStatus();
//        flight2.setFlightNumber("FL456");
//        flight2.setSource("Chicago");
//        flight2.setDestination("San Francisco");
//        flight2.setDepartureDate("2024-08-01");
//        flight2.setArrivalDate("2024-08-01");
//        flight2.setScheduledDepartureTime("09:00");
//        flight2.setScheduledArrivalTime("12:00");
//        flight2.setActualDepartureTime("09:00");
//        flight2.setActualArrivalTime("12:00");
//        flight2.setBoardingGate("B1");
//        flight2.setTerminal("2");
//
//        flightStatusRepository.saveAll(Arrays.asList(flight1, flight2));
//
//        // Add passengers
//        Passenger passenger1 = new Passenger("PNR001", "Raghav Gupta", "6284005684", "raaghavgupta2020@gmail.com");
//        Passenger passenger2 = new Passenger("PNR002", "Manas Khandelwal", "9166614976", "khandelwal1802@gmail.com");
//        Passenger passenger3 = new Passenger("PNR003", "Alice Johnson", "1234567892", "alice.johnson@example.com");
//        Passenger passenger4 = new Passenger("PNR004", "Bob Brown", "1234567893", "bob.brown@example.com");
//        Passenger passenger5 = new Passenger("PNR005", "Charlie Davis", "1234567894", "charlie.davis@example.com");
//
//        Passenger passenger6 = new Passenger("PNR006", "Eve Miller", "1234567895", "eve.miller@example.com");
//        Passenger passenger7 = new Passenger("PNR007", "Frank Wilson", "1234567896", "frank.wilson@example.com");
//        Passenger passenger8 = new Passenger("PNR008", "Grace Lee", "1234567897", "grace.lee@example.com");
//        Passenger passenger9 = new Passenger("PNR009", "Henry Young", "1234567898", "henry.young@example.com");
//        Passenger passenger10 = new Passenger("PNR010", "Ivy Clark", "1234567899", "ivy.clark@example.com");
//
//        passengerRepository.saveAll(Arrays.asList(passenger1, passenger2, passenger3, passenger4, passenger5,
//                passenger6, passenger7, passenger8, passenger9, passenger10));
//
//        // Assign passengers to flights
//        flight1.setPassengerPnrs(Arrays.asList(passenger1.getPnr(), passenger2.getPnr(), passenger3.getPnr(),
//                passenger4.getPnr(), passenger5.getPnr()));
//
//        flight2.setPassengerPnrs(Arrays.asList(passenger6.getPnr(), passenger7.getPnr(), passenger8.getPnr(),
//                passenger9.getPnr(), passenger10.getPnr()));
//
//        flightStatusRepository.saveAll(Arrays.asList(flight1, flight2));
//    }
//}
