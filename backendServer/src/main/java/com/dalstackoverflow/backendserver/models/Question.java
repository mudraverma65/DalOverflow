package com.dalstackoverflow.backendserver.models;

import jakarta.persistence.*;
import lombok.*;


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
@NoArgsConstructor
@ToString
@Table(name = "question")
public class Question {
    /**
     * This the PK of the table and is auto incremented.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "q_id")
    private String questionID;

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

    // this is used to store all instance of all answers
    @Transient
    public Iterable<Answer> allAnswers;

    public Iterable<Answer> getAllAnswers() {
        return allAnswers;
    }

    public void setAllAnswers(Iterable<Answer> allAnswers) {
        this.allAnswers = allAnswers;
    }
}