package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@RestController
@RequestMapping("/user1")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @GetMapping("/homepage")
    public String viewHomePage() {
        return "index";
    }

    @PostMapping("/add")
    public String add(@RequestBody Registration register) throws NoSuchAlgorithmException {
        String password = register.getPassword();
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hashedPwd = md.digest(password.getBytes());
        String encryptedPassword = Base64.getEncoder().encodeToString(hashedPwd);
        register.setPassword(encryptedPassword);
        registrationService.saveRegistration(register);
        return "New user is added";
    }

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody Registration registration) throws NoSuchAlgorithmException {
        int userId = registration.getUserId();
        String password = registration.getPassword();

        Registration storedRegistration = registrationService.getRegistrationById(Integer.parseInt(String.valueOf(userId)));

        if (storedRegistration != null) {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedPwd = md.digest(password.getBytes());
            String encryptedPassword = Base64.getEncoder().encodeToString(hashedPwd);

            if (storedRegistration.getPassword().equals(encryptedPassword)) {
                return "Login successful";
            }
        }
        return "Login failed";
    }

}
