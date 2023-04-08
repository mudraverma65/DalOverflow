package com.dalstackoverflow.backendserver.models;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class RegistrationTest {

    @Test
    public void testGetUserId() {
        Registration registration = new Registration();
        registration.setUserId(1);
        assertEquals(1, registration.getUserId());
    }

    @Test
    public void testGetUserName() {
        Registration registration = new Registration();
        registration.setUserName("testuser");
        assertEquals("testuser", registration.getUserName());
    }

    @Test
    public void testGetEmailId() {
        Registration registration = new Registration();
        registration.setEmailId("testuser@example.com");
        assertEquals("testuser@example.com", registration.getEmailId());
    }

    @Test
    public void testGetPassword() {
        Registration registration = new Registration();
        registration.setPassword("password");
        assertEquals("password", registration.getPassword());
    }

}
