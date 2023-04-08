package com.dalstackoverflow.backendserver.repositories;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.dalstackoverflow.backendserver.models.Registration;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class RegistrationRepositoryTest {

    @Mock
    private RegistrationRepository registrationRepository;

    @Test
    public void testFindByUserName() {
        // Mock the Registration object that will be returned by the repository
        Registration registration = new Registration();
        registration.setUserId(1);
        registration.setUserName("test");
        registration.setPassword("password");
        when(registrationRepository.findByUserName("test")).thenReturn(registration);

        // Call the method being tested and assert that it returns the expected result
        Registration result = registrationRepository.findByUserName("test");
        assertEquals(registration, result);
    }
}
