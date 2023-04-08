package com.dalstackoverflow.backendserver.repositories;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import com.dalstackoverflow.backendserver.models.Registration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class LoginRepositoryTest {

    @Mock
    private LoginRepository loginRepository;

    @Test
    public void testFindByUserNameAndPassword() {
        Registration registration = new Registration();
        registration.setUserId(1);
        registration.setUserName("test");
        registration.setPassword("password");
        when(loginRepository.findByUserNameAndPassword("test", "password")).thenReturn(registration);

        Registration result = loginRepository.findByUserNameAndPassword("test", "password");
        assertEquals(registration, result);
    }

    @Test
    public void testFindById() {
        // Mock the Registration object that will be returned by the repository
        Registration registration = new Registration();
        registration.setUserId(1);
        registration.setUserName("test");
        registration.setPassword("password");
        when(loginRepository.findById(1)).thenReturn(registration);

        // Call the method being tested and assert that it returns the expected result
        Registration result = loginRepository.findById(1);
        assertEquals(registration, result);
    }
}
