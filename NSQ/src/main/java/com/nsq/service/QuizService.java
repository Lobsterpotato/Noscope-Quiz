package com.nsq.service;

import com.nsq.model.Question;
import com.nsq.model.Quiz;
import com.nsq.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quiz creeQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz getQuizByCategorie(String categorie) {
        return quizRepository.findByCategorie(categorie);
    }

    public List<Quiz> getListeQuiz() {
        return quizRepository.findAll();
    }

    public void deleteQuiz(Long id) {
        quizRepository.deleteById(id);
    }

    public List<Question> getAllQuestions(Long id) {
        Quiz quiz = quizRepository.getByIdQuiz(id);
        return quiz.getQuestionsList();
    }
}
