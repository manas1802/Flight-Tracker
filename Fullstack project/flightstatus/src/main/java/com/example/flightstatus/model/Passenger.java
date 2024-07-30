package com.example.flightstatus.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "passenger")
public class Passenger {

    @Id
    private String pnr;
    private String name;
    private String phoneNumber;
    private String email;

    // Getters and Setters
    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Passenger(String pnr, String name, String phoneNumber, String email) {
        this.pnr = pnr;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}