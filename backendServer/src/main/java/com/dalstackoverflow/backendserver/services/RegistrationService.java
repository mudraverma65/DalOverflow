package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.repositories.RegistrationRepository;

import com.dalstackoverflow.backendserver.models.Registration;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    private final RegistrationRepository registrationRepository;

    @Autowired
    public RegistrationService(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @Transactional
    public void postUserQuestion(Registration user1) {
        registrationRepository.save(user1);
    }
}
