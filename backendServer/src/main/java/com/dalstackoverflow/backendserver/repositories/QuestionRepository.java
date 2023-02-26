package com.dalstackoverflow.backendserver.repositories;

import com.dalstackoverflow.backendserver.models.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sreejith Nair
 * This is the repository interface that will be used by the project for Questions.
 */
@Repository
public interface QuestionRepository extends CrudRepository<Question,String> {
}
