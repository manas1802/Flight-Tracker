package com.example.flightstatus.controller;

import com.example.flightstatus.config.RabbitMQConfig;
import com.example.flightstatus.model.EmailMessage;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class NotificationController {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @PostMapping("/notify-passengers")
    public void notifyPassengers(@RequestBody EmailMessage emailMessage) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.QUEUE_NAME, emailMessage);
    }
}

