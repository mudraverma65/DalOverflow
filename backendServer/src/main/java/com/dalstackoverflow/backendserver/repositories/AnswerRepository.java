package com.dalstackoverflow.backendserver.repositories;

import com.dalstackoverflow.backendserver.models.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends CrudRepository<Answer,Integer> {

    /**
     * This method used to get all answers for a particular questionID
     * @param questionID is used to check which answers has this questionID
     * @return Iterable<Answer> to the AnswerService Class
     */
    Iterable<Answer> findByQuestionID(Integer questionID);


}
