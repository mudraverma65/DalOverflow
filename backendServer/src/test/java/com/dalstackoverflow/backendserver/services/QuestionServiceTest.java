package com.dalstackoverflow.backendserver.services;

import com.dalstackoverflow.backendserver.models.Question;
import com.dalstackoverflow.backendserver.repositories.QuestionRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class QuestionServiceTest {
    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionServiceTest.class);
    private Question question;

    @BeforeEach
    void setUp() {
        LOGGER.info("Setting up dummy mock object");
        question = new Question();
        question.setQuestionID(999);
        question.setUserID(1);
        question.setQuestionTitle("Test Title");
        question.setQuestionDescription("Test Description");
        question.setQuestionCode("This is the test code");
    }

    @AfterEach
    void tearDown() {
    }

    /**
     * This methods tests the basic posting functionality of the question service.
     */
    @Test
    void testPostUserQuestion() {
        QuestionService questionService = new QuestionService();
        questionService.questionRepository = mock(QuestionRepository.class);

        /*
        this is not required as of now since we need to test the save method as well.
        doNothing().when(mockRepository).save(any(Question.class));
         */
        LOGGER.info("Executing Test testPostUserQuestion");
        questionService.postUserQuestion(question);
        verify(questionService.questionRepository, times(1)).save(question);
    }

    @Test
    void testSearchQuestion() {
        QuestionRepository mockRepository = mock(QuestionRepository.class);
        when(mockRepository.findById(1)).thenReturn(Optional.of(question));

        QuestionService questionService = new QuestionService();
        questionService.questionRepository = mockRepository;

        /*Fetching the search question result for the mock object*/
        Optional<Question> result = questionService.searchQuestion(1);

        /*Verifying if findByID() was called only once during this process*/
        verify(mockRepository, times(1)).findById(1);

        /*Checking if result contains the same object as the mock object*/
        assertEquals(question, result.get());
    }
}