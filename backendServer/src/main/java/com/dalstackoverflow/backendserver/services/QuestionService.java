package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.Question;
import com.dalstackoverflow.backendserver.repositories.QuestionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * @author Sreejith Nair
 * This is the service class for posting and fetching questions
 */
@Service
public class QuestionService {
    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

    @Autowired
    QuestionRepository questionRepository;

    /**
     * @param userQuestion
     * This method will be called on posting the questions from the Ask Question Page.
     */
    @Transactional
    public void postUserQuestion(Question userQuestion){
        questionRepository.save(userQuestion);
        LOGGER.info(" Your question was succesfully posted");
    }

    public Optional<Question> searchQuestion(Integer questionID){

        return questionRepository.findById(questionID);
    }


}
