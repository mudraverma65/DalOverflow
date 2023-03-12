package com.dalstackoverflow.backendserver.repositories;
import com.dalstackoverflow.backendserver.models.Registration;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepository extends CrudRepository<Registration, Integer>
{
    Registration findByUserNameAndPassword(String username, String password);

}

