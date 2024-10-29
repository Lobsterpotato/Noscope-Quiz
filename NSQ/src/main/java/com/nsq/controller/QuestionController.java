package com.nsq.controller;

import com.nsq.dto.QuestionDTO;
import com.nsq.model.Question;
import com.nsq.service.QuestionService;
import com.nsq.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;
    private final QuizService quizService;

    public QuestionController(QuestionService questionService, QuizService quizService) {
        this.questionService = questionService;
        this.quizService = quizService;
    }

    @PostMapping("/ajouter_question")
    public ResponseEntity<?> creeQuestion(@RequestBody QuestionDTO questionDTO) {
        Question questionCree;
        try {
            questionCree = questionService.creeQuestion(questionDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur lors de la création de la question");
        }
        return ResponseEntity.ok(questionCree);
    }

    @PostMapping("/delete_question/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
        return ResponseEntity.ok("Question supprimée");
    }

    @PutMapping("/update_question/{id}")
    public ResponseEntity<?> updateQuestion(@PathVariable Long id, @RequestBody Question question) {
        Question questionUpdate;
        try {
            questionUpdate = questionService.updateQuestion(id, question);
            return ResponseEntity.ok(questionUpdate);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body("Erreur lors de la modification de la question");
        }
    }

}
