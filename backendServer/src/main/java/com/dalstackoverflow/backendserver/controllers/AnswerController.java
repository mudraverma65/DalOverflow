package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.Answer;
import com.dalstackoverflow.backendserver.repositories.AnswerRepository;
import com.dalstackoverflow.backendserver.repositories.LoginRepository;
import com.dalstackoverflow.backendserver.services.AnswerService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * @author Utkarsh Shah
 * This is the primary controller class of the Answers api.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "questions/{questionId}/answers")
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


    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private LoginRepository userRepository;

    /**
     * @author Ritva Katrodiya
     * @param questionId it is passed to and saved as one of the answer attribute
     * @param userId it is passed to and saved as one of the answer attribute
     * @param answer takes the answer from UI and post in the DB
     * @return a responseEntity with answer saved and a 201 created response status
     */
    @PostMapping("/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> saveOrUpdateAnswer(
            @PathVariable int questionId,
            @PathVariable int userId,
            @RequestBody Answer answer) {
        answer.setQuestionID(questionId);
        answer.setUserID(userId);

        Answer savedAnswer = answerRepository.save(answer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAnswer);
    }
}