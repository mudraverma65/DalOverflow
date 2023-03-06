package com.dalstackoverflow.backendserver.repositories;

import com.dalstackoverflow.backendserver.models.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer>
{
}