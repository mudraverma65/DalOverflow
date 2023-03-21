package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.LoginRequest;
import com.dalstackoverflow.backendserver.models.LoginResponse;
import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.repositories.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
            String userName=user.getUserName();
            return new LoginResponse("Login successful!", userId,userName);
        } else {
            return new LoginResponse("Invalid credentials. Please try again.", null,null);
        }
    }


    /**
     * This method will is used to get the username from DB
     * @param userId
     * @return username when user will be logged in
     */
    public String getUsername(int userId) {
        Optional<Registration> userOptional = Optional.ofNullable(loginRepository.findById(userId));
        if (userOptional.isPresent()) {
            Registration user = userOptional.get();
            return user.getUserName();
        } else {
            return null;
        }
    }


}

