package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.repositories.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class RegistrationServiceImp implements  RegistrationService{
    @Autowired
    private RegistrationRepository registrationRepository;
    @Override

    public Registration saveRegistration(Registration user)
    {
        return registrationRepository.save(user);
    }

    @Override
    public Registration getRegistrationById(int userId) {
        Optional<Registration> registrationResponse = registrationRepository.findById(userId);

        if (registrationResponse.isPresent()) {
            return registrationResponse.get();
        }

        return null;
    }
}
