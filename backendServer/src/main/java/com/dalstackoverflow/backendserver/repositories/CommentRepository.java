package com.dalstackoverflow.backendserver.repositories;

import com.dalstackoverflow.backendserver.models.Comment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

    @Query(value = "select * from comment where a_id =:answerID", nativeQuery = true)
    List<Comment> fetchAnswerComments(@Param("answerID") int answerID);
}
