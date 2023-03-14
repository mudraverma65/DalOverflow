package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.LoginRequest;
import com.dalstackoverflow.backendserver.models.LoginResponse;
import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.repositories.LoginRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private final LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public LoginResponse loginUser(LoginRequest loginRequest) {
        Registration user = loginRepository.findByUserNameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());

        if (user != null) {
            int userId = user.getUserId();
            return new LoginResponse("Login successful!", userId);
        } else {
            return new LoginResponse("Invalid credentials. Please try again.", null);
        }
    }
}

