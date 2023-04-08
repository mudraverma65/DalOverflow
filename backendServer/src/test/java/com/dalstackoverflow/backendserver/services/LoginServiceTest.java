package com.dalstackoverflow.backendserver.services;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.dalstackoverflow.backendserver.models.LoginRequest;
import com.dalstackoverflow.backendserver.models.LoginResponse;
import com.dalstackoverflow.backendserver.models.Registration;
import com.dalstackoverflow.backendserver.repositories.LoginRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class LoginServiceTest {

    @Mock
    private LoginRepository loginRepository;

    private LoginService loginService;

    @Before
    public void setUp() {
        loginService = new LoginService(loginRepository);
    }

    @Test
    public void testLoginUserWithValidCredentials() {
        // Mock the Registration object that will be returned by the repository
        Registration registration = new Registration();
        registration.setUserId(1);
        registration.setUserName("test");
        registration.setPassword("password");
        when(loginRepository.findByUserNameAndPassword("test", "password")).thenReturn(registration);

        // Call the method being tested and assert that it returns the expected result
        LoginRequest loginRequest = new LoginRequest("test","password");
        loginRequest.setUsername("test");
        loginRequest.setPassword("password");
        LoginResponse result = loginService.loginUser(loginRequest);
        assertEquals("Login successful!", result.getMessage());
        assertEquals(1, (int) result.getUserId());
        assertEquals("test", result.getUserName());
        assertEquals("password", result.getPassword());
    }

    @Test
    public void testLoginUserWithInvalidCredentials() {
        // Mock the Registration object that will be returned by the repository
        when(loginRepository.findByUserNameAndPassword("test", "password")).thenReturn(null);

        // Call the method being tested and assert that it returns the expected result
        LoginRequest loginRequest = new LoginRequest("test","password");
        loginRequest.setUsername("test");
        loginRequest.setPassword("password");
        LoginResponse result = loginService.loginUser(loginRequest);
        assertEquals("Invalid credentials. Please try again.", result.getMessage());
        assertEquals(null, result.getUserId());
        assertEquals(null, result.getUserName());
        assertEquals(null, result.getPassword());
    }

    @Test
    public void testGetUsernameWithValidUserId() {
        // Mock the Registration object that will be returned by the repository
        Registration registration = new Registration();
        registration.setUserId(1);
        registration.setUserName("test");
        registration.setPassword("password");
        when(loginRepository.findById(1)).thenReturn(registration);

        // Call the method being tested and assert that it returns the expected result
        String result = loginService.getUsername(1);
        assertEquals("test", result);
    }

    @Test
    public void testGetUsernameWithInvalidUserId() {
        // Mock the Registration object that will be returned by the repository
        when(loginRepository.findById(1)).thenReturn(null);

        // Call the method being tested and assert that it returns the expected result
        String result = loginService.getUsername(1);
        assertEquals(null, result);
    }
}
