package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.Answer;
import com.dalstackoverflow.backendserver.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public Iterable<Answer> getAllAnswerByQuestionID(Integer questionID) {
        return answerRepository.findByQuestionID(questionID);
    }
}
