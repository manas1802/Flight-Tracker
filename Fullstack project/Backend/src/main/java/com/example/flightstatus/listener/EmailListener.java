package com.example.flightstatus.listener;

import com.example.flightstatus.config.RabbitMQConfig;
import com.example.flightstatus.model.EmailMessage;
import com.example.flightstatus.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmailListener {

    @Autowired
    private EmailService emailService;

    @RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
    public void receiveMessage(EmailMessage emailMessage) {
        emailService.sendEmail(emailMessage.getEmail(), emailMessage.getMessage());
    }
}

