package com.dalstackoverflow.backendserver.services;
import com.dalstackoverflow.backendserver.models.Registration;

import java.security.NoSuchAlgorithmException;

public interface RegistrationService
{
    public Registration saveRegistration(Registration register);

    public Registration getRegistrationById(int iduser) throws NoSuchAlgorithmException;
}
