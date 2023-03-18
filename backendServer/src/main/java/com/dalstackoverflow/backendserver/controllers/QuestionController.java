package com.dalstackoverflow.backendserver.controllers;

import com.dalstackoverflow.backendserver.models.Answer;
import com.dalstackoverflow.backendserver.models.Question;
import com.dalstackoverflow.backendserver.services.AnswerService;
import com.dalstackoverflow.backendserver.services.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Sreejith Nair
 * This is the primary controller class of the Questions api.
 */

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin
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
    @PostMapping("/postQuestion")
    @ResponseStatus(HttpStatus.CREATED)
    public void postUserQuestion(@RequestBody Question question)
    {
        LOGGER.info("Calling Question Service");
        LOGGER.info("Request Object:"+question.toString());
        questionService.postUserQuestion(question);
    }

    /**
     * This method will be called from the homepage which will
     * fetch the list of top questions to be rendered on the homepage.
     * @return list of questions fetched by the api call.
     */
    @GetMapping("/fetchTopQuestions")
    @ResponseStatus(HttpStatus.FOUND)
    public List<Question> fetchTopUserQuestions(){
        LOGGER.info("Fetching Top user Questions!!");
        List<Question> questionList = questionService.fetchTopQuestion();
        return questionList;

    }

    @Autowired
    AnswerService answerService;


    /**
     * @author Utkarsh Shah
     *
     *This method just get all answers by question id.
     * All answers will have each attributes which will be helpful for UI to fetch and display.
     *
     * @param questionID
     * @return whole question with all attributes . One of the attributes will be List<Answer>.
     *
     */
    @GetMapping("/{questionID}/answer")
    public Question getAnswersByQuestionID(@PathVariable Integer questionID) {
        LOGGER.info("Calling Answer Service");
        LOGGER.info("Request Object:" + questionID.toString());
        Iterable<Answer> allAnswers = answerService.getAllAnswerByQuestionID(questionID);
        Question questionReceived = new Question();
        LOGGER.info("Calling Question Service:");
        Optional<Question> questionClicked = questionService.searchQuestion(questionID);
        if(questionClicked.isPresent()){
            questionReceived = questionClicked.get();
        }
        questionReceived.setAllAnswers(allAnswers);
        return questionReceived;

    }
}
