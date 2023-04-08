package com.dalstackoverflow.backendserver.models;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class LoginRequestTest {

    @Test
    void testGettersAndSetters() {

        LoginRequest loginRequest = new LoginRequest("testuser", "testpassword");


        loginRequest.setUsername("newuser");
        loginRequest.setPassword("newpassword");

        // Assert
        assertEquals("newuser", loginRequest.getUsername());
        assertEquals("newpassword", loginRequest.getPassword());
    }

    @Test
    void testToString() {
        // Arrange
        LoginRequest loginRequest = new LoginRequest("testuser", "testpassword");

        // Act
        String result = loginRequest.toString();

        // Assert
        assertEquals("LoginRequest{username='testuser', password='testpassword'}", result);
    }

    @Test
    void testConstructor() {
        // Arrange and Act
        LoginRequest loginRequest = new LoginRequest("testuser", "testpassword");

        // Assert
        assertEquals("testuser", loginRequest.getUsername());
        assertEquals("testpassword", loginRequest.getPassword());
    }
}

