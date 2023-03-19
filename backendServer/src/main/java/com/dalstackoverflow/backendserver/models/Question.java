package com.dalstackoverflow.backendserver.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


/**
 * @author Sreejith Nair
 * This is the model class for Question table.
 * The model class will be used for posting and fetching questions from the UI.
 */
@Getter
@Setter
@EqualsAndHashCode
@Entity
@AllArgsConstructor
@ToString
@Table(name = "question")
public class Question {
    /**
     * This the PK of the table and is auto incremented.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "q_id")
    private int questionID;

    @NonNull
    @Column(name = "u_id")
    private int userID;

    @Column(name = "q_title")
    private String questionTitle;

    @Column(name = "q_description")
    private String questionDescription;

    @Column(name="q_code")
    private String questionCode;

    @Column(name="q_date")
    private String questionDate;

    /*Temporary Code Start*/
    @Transient
    private String userName;

    @Transient
    private List<String> tags;

    @Transient
    private long answerCount;
    /*Temporary Code End*/

    // this is used to store all instance of all answers
    @Transient
    public List<Answer> allAnswers;

    public List<Answer> getAllAnswers() {
        return allAnswers;
    }

    public void setAllAnswers(List<Answer> allAnswers) {
        this.allAnswers = allAnswers;
    }

    /**
     * Adding default constructor to initialize the List.
     */
    public Question() {
        this.tags = new ArrayList<String>();
    }
}