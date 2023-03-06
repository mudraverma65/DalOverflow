package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.Question;
import com.dalstackoverflow.backendserver.services.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author Sreejith Nair
 * This is the primary controller class of the Questions api.
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/question")
public class QuestionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);

    @Autowired
    QuestionService questionService;

    /**
     * @param question
     * This method is used for posting the question posted from the UI.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postUserQuestion(@RequestBody Question question){
        LOGGER.info("Calling Question Service");
        LOGGER.info("Request Object:"+question.toString());
        questionService.postUserQuestion(question);
        //return ResponseEntity.status(HttpStatus.CREATED).body("Question created successfully");
    }
}
