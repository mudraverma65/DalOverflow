package com.Login.LoginSignUp.controllers;

import com.Login.LoginSignUp.models.Registration;
import com.Login.LoginSignUp.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@RestController
@RequestMapping("/register")
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

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Registration getStudent(@PathVariable int id) {
        Registration studentResponse = registrationService.isUserExist(id);
        return studentResponse;
    }


        @PostMapping("/authenticate")
        public String authenticate(@RequestBody Registration registration) throws NoSuchAlgorithmException {
            int userId = registration.getUserId();
            String password = registration.getPassword();

            Registration storedRegistration = registrationService.getRegistrationById(userId);

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

