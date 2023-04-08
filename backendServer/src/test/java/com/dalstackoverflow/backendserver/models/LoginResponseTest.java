package com.dalstackoverflow.backendserver.models;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class LoginResponseTest {

    @Test
    public void testGetMessage() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        assertEquals("success", loginResponse.getMessage());
    }

    @Test
    public void testGetUserId() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        assertEquals(1, loginResponse.getUserId());
    }

    @Test
    public void testGetUserName() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        assertEquals("testuser", loginResponse.getUserName());
    }
    @Test
    public void testGetPassword() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        assertEquals("password", loginResponse.getPassword());
    }

    @Test
    public void testSetMessage() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        loginResponse.setMessage("failure");
        assertEquals("failure", loginResponse.getMessage());
    }

    @Test
    public void testSetUserId() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        loginResponse.setUserId(2);
        assertEquals(2, loginResponse.getUserId());
    }

    @Test
    public void testSetUserName() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        loginResponse.setUserName("newuser");
        assertEquals("newuser", loginResponse.getUserName());
    }
    @Test
    public void testSetPassword() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        loginResponse.setPassword("newpassword");
        assertEquals("newpassword", loginResponse.getPassword());
    }

    @Test
    public void testToString() {
        LoginResponse loginResponse = new LoginResponse("success", 1, "testuser", "password");
        String expectedString = "LoginResponse{message='success', userId=1, userName=testuser, password=password}";
        assertEquals(expectedString, loginResponse.toString());
    }
}
