package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.Answer;
import com.dalstackoverflow.backendserver.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * @author Utkarsh Shah
 * This is the service class for posting and fetching answers
 */
@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    /**
     * Returns an Iterable of Answer objects that are associated with the given questionID.
     * @param questionID the ID of the question to retrieve answers for.
     * @return an Iterable of Answer objects associated with the given questionID.
 */
    public Iterable<Answer> getAllAnswerByQuestionID(Integer questionID) {
        return answerRepository.findByQuestionID(questionID);
    }
}
