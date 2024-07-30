package com.example.flightstatus.model;
import java.io.Serializable;

public class EmailMessage implements Serializable {

    private static final long serialVersionUID = 1L;

    private String email;
    private String message;

    // Getters and Setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

