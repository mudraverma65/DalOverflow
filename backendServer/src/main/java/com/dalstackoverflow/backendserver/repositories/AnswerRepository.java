package com.dalstackoverflow.backendserver.repositories;

import com.dalstackoverflow.backendserver.models.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends CrudRepository<Answer,Integer> {
    Iterable<Answer> findByQuestionID(Integer questionID);


}
