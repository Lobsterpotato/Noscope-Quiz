package com.nsq.service;

import com.nsq.dto.QuestionDTO;
import com.nsq.model.Question;
import com.nsq.model.Quiz;
import com.nsq.repository.QuestionRepository;
import com.nsq.repository.QuizRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public QuestionService(QuestionRepository questionRepository, QuizRepository quizRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
    }

    public Question creeQuestion(QuestionDTO questionDTO) {
        Question question = new Question();
        question.setQuestion(questionDTO.getQuestion());
        question.setAnswer(questionDTO.getAnswer());
        question.setOption1(questionDTO.getOption1());
        question.setOption2(questionDTO.getOption2());
        question.setOption3(questionDTO.getOption3());
        quizRepository.getById(questionDTO.getIdQuiz()).getQuestionsList().add(question);
        return questionRepository.save(question);
    }

    public void deleteQuestion(Long id) {
        Question question = questionRepository.getById(id);
        Quiz quiz = quizRepository.findByQuestionsList_IdQuestion(id);
        quiz.getQuestionsList().remove(question);
        quizRepository.save(quiz);
        questionRepository.deleteById(id);
    }

    public Question updateQuestion(Long id, Question question) {
        Question questionUpdate = questionRepository.getById(id);
        questionUpdate.setQuestion(question.getQuestion());
        questionUpdate.setAnswer(question.getAnswer());
        questionUpdate.setOption1(question.getOption1());
        questionUpdate.setOption2(question.getOption2());
        questionUpdate.setOption3(question.getOption3());
        return questionRepository.save(questionUpdate);
    }
}
