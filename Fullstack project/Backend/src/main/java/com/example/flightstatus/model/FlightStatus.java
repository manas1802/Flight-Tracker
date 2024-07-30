package com.example.flightstatus.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "flight_status")
public class FlightStatus {

    @Id
    private String flightNumber;
    private String source;
    private String destination;
    private String departureDate;
    private String arrivalDate;
    private String scheduledDepartureTime;
    private String scheduledArrivalTime;
    private String actualDepartureTime;
    private String actualArrivalTime;
    private String boardingGate;
    private String terminal;
    private List<String> passengerPnrs;

    // Getters and Setters
    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(String arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public String getScheduledDepartureTime() {
        return scheduledDepartureTime;
    }

    public void setScheduledDepartureTime(String scheduledDepartureTime) {
        this.scheduledDepartureTime = scheduledDepartureTime;
    }

    public String getScheduledArrivalTime() {
        return scheduledArrivalTime;
    }

    public void setScheduledArrivalTime(String scheduledArrivalTime) {
        this.scheduledArrivalTime = scheduledArrivalTime;
    }

    public String getActualDepartureTime() {
        return actualDepartureTime;
    }

    public void setActualDepartureTime(String actualDepartureTime) {
        this.actualDepartureTime = actualDepartureTime;
    }

    public String getActualArrivalTime() {
        return actualArrivalTime;
    }

    public void setActualArrivalTime(String actualArrivalTime) {
        this.actualArrivalTime = actualArrivalTime;
    }

    public String getBoardingGate() {
        return boardingGate;
    }

    public void setBoardingGate(String boardingGate) {
        this.boardingGate = boardingGate;
    }

    public String getTerminal() {
        return terminal;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }

    public List<String> getPassengerPnrs() {
        return passengerPnrs;
    }

    public void setPassengerPnrs(List<String> passengerPnrs) {
        this.passengerPnrs = passengerPnrs;
    }
}
