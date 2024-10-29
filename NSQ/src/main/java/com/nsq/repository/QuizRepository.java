package com.nsq.repository;

import com.nsq.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Quiz findByCategorie(String categorie);
    Quiz findByQuestionsList_IdQuestion(Long id);
    Quiz getByIdQuiz(Long id);
}
