package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.LoginRequest;
import com.dalstackoverflow.backendserver.models.LoginResponse;
import com.dalstackoverflow.backendserver.services.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("user/login")
public class LoginController {
    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public LoginResponse loginUser(@RequestBody LoginRequest loginRequest) {
        LOGGER.info("Calling Login Service");
        LOGGER.info("Request Object:" + loginRequest.toString());
        String encryptedPassword = getEncrypted(loginRequest.getPassword());
        loginRequest.setPassword(encryptedPassword);
        return loginService.loginUser(loginRequest);
    }

    private static String getEncrypted(String password) {
        String encryptedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) {
                sb.append(String.format("%02x", b));
            }
            encryptedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return encryptedPassword;
    }
}
