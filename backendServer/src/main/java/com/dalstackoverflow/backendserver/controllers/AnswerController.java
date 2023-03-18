package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.Answer;
import com.dalstackoverflow.backendserver.services.AnswerService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
/**
 * @author Utkarsh Shah
 * This is the primary controller class of the Answers api.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AnswerController {

    @Autowired
    AnswerService answerService;

    /**
     * This method will return list of answer objects for an particular questionID on an api call
     * @param questionID
     * @return list of answer objects
     */
    @Transactional
    public List<Answer> getAllAnswers(int questionID){

        return answerService.getAllAnswerByQuestionID(questionID);
    }
}
