package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.LoginRequest;
import com.dalstackoverflow.backendserver.models.LoginResponse;
import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.repositories.LoginRepository;
import org.springframework.stereotype.Service;

/**
 * @author Ritva Katrodiya
 * This is the service class for posting and fetching user
 */
@Service
public class LoginService {
    private final LoginRepository loginRepository;

    /**
     * This is a constructor of LoginService class
     * @param loginRepository is an instance of LoginRepository
     */
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    /**
     * This method will verify the username and password for login feature
     * @param loginRequest
     * @return will userId whne login sucessful
     */
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

